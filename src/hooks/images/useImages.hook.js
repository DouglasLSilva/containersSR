import { useCallback } from 'react';
import { useSetRecoilState } from 'recoil';

import { imagesAtom } from '../../atoms/images';
import { dockerApi } from '../../services/dockerApi.service';

const useImages = () => {
  const setImages = useSetRecoilState(imagesAtom);

  const getImages = useCallback(async () => {
    try {
      setImages(prevState => ({ ...prevState, loading: true }));

      const images = await dockerApi.get('/images/json').then(({ data }) => data);

      setImages(prevState => ({ ...prevState, data: images, total: images.length }));
    } catch (error) {
      console.log('erro', error)
    } finally {
      setImages(prevState => ({ ...prevState, loading: false }));
    }
  }, [setImages]);

  const deleteImage = useCallback(async (imageId) => {
    await dockerApi.delete(`/images/${imageId}`);

    setImages(prevState => ({
      ...prevState,
      data: prevState.data.filter((image) => image.Id !== imageId),
    }));
  }, [setImages]);

  const deleteAllImages = useCallback(async () => {
    await dockerApi.post(`/images/prune`);

    getImages();
  }, [getImages]);

  const createImage = useCallback(async (fromImage) => {
    dockerApi.post('images/create', {}, { params: { fromImage } });

    getImages();
  }, [getImages]);

  return {
    deleteImage,
    deleteAllImages,
    getImages,
    createImage,
  }
}

export default useImages;
