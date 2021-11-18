import { useCallback } from 'react';

import { dockerApi } from '../../services/dockerApi.service';

const useSystemInformation = () => {
  const getInfo = useCallback(async () => {
    const apiVersion = await dockerApi.get('/version').then(({ data }) => data);
    const systemInfo = await dockerApi.get('/info').then(({ data }) => data);

    return {
      apiVersion,
      systemInfo,
    }
  }, []);


  return {
    getInfo,
  }
}

export default useSystemInformation;
