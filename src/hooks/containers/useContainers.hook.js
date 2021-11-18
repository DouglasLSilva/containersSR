import { useCallback } from 'react';
import { useSetRecoilState } from 'recoil';

import { containersAtom, currentContainerAtom } from '../../atoms/containers';
import { dockerApi } from '../../services/dockerApi.service';

const useContainers = () => {
  const setContainers = useSetRecoilState(containersAtom);
  const setCurrentContainer = useSetRecoilState(currentContainerAtom);

  const deleteContainer = useCallback(async (containerId) => {
    await dockerApi.delete(`/containers/${containerId}`);

    setContainers(prevState => ({
      ...prevState,
      data: prevState.data.filter((container) => container.Id !== containerId),
    }));
  }, [setContainers]);

  const deleteAllContainers = useCallback(async () => {
    await dockerApi.post(`/containers/prune`);

    setContainers(prevState => ({
      ...prevState,
      data: prevState.data.filter((container) => container.State !== 'exited' ),
    }));
  }, [setContainers]);

  const getContainers = useCallback(async () => {
    try {
      setContainers(prevState => ({ ...prevState, loading: true }));

      const containers = await dockerApi
        .get('/containers/json', { params: { all: true } })
        .then(({ data }) => data);

        setContainers(prevState => ({ ...prevState, data: containers, total: containers.length }));
    } finally {
      setContainers(prevState => ({ ...prevState, loading: false }));
    }
  }, [setContainers]);

  const getContainerInfo = useCallback(async (containerId) => {
    try {
      setCurrentContainer(prevState => ({ ...prevState, loading: true }));

      const containerInfo = await dockerApi
        .get(`/containers/${containerId}/json`)
        .then(({ data }) => data);

      setCurrentContainer(prevState => ({ ...prevState, data: containerInfo }));
    } finally {
      setCurrentContainer(prevState => ({ ...prevState, loading: false }));
    }
  }, [setCurrentContainer]);

  const startContainer = useCallback(async (containerId) => {
    await dockerApi.post(`/containers/${containerId}/start`);

    setContainers(prevState => ({
      ...prevState,
      data: prevState.data.map((container) => {
        return container.Id === containerId ? { ...container, State: 'running' } : container;
      }),
    }));
  }, [setContainers])

  const stopContainer = useCallback(async (containerId) => {
    await dockerApi.post(`/containers/${containerId}/stop`);

    setContainers(prevState => ({
      ...prevState,
      data: prevState.data.map((container) => {
        return container.Id === containerId ? { ...container, State: 'exited' } : container;
      }),
    }));
  }, [setContainers])

  const createContainer = useCallback(async (data, name) => {
    await dockerApi.post('containers/create', data, { params: { name } });

    getContainers();
  }, [getContainers]);

  return {
    createContainer,
    deleteContainer,
    deleteAllContainers,
    getContainers,
    getContainerInfo,
    startContainer,
    stopContainer,
  }
}

export default useContainers;
