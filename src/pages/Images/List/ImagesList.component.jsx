import { useCallback, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { Container, Button, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import { Delete } from '@material-ui/icons';

import { imagesAtom } from '../../../atoms/images'
import { useImages } from '../../../hooks/images'
import { ImageCreateModal } from '../Create'

const ImagesList = () => {
  const images = useRecoilValue(imagesAtom);
  const { deleteAllImages, deleteImage, getImages } = useImages();
  const [openImageModal, setOpenImageModal] = useState(false);

  const formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0 || bytes === null) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

function isEmpty(value){
  if(value == null || value === ''){
    return "";
  }
}

const handleDeleteAll = useCallback(async () => {
  try {
    await deleteAllImages();
  } catch (error) {
    console.log(error);
  }
}, [deleteAllImages])

const handleDelete = useCallback(async (imageId) => {
  try {
    await deleteImage(imageId);
  } catch (error) {
    console.log(error);
  }
}, [deleteImage])

  useEffect(() => {
    getImages();
  }, [getImages]);

  return (
    <Container maxWidth="xl">
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '24px' }}>
        <Button
          onClick={() => setOpenImageModal(true)}
          style={{ marginRight: '16px' }}
          type="button"
          variant="outlined"
        >
          Criar Imagem
        </Button>
        <Button color="secondary" onClick={() => handleDeleteAll()} variant="outlined">
          Excluir todas Imagens
        </Button>
      </div>

      <TableContainer component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Repositório</TableCell>
              <TableCell>Tamanho</TableCell>
              <TableCell>Tamanho Virtual</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {images.data.map((row) => (
              <TableRow key={row.Id}>
                <TableCell>{row.RepoTags === null ? "" : row.RepoTags[0]}</TableCell>
                <TableCell>{formatBytes(row.Size)}</TableCell>
                <TableCell>{formatBytes(row.VirtualSize)}</TableCell>
                <TableCell>
                  <IconButton color="secondary" onClick={() => handleDelete(row.Id)}>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {openImageModal && <ImageCreateModal open={openImageModal} handleCloseModal={() => setOpenImageModal(false)} />}
    </Container>
  );
}

export default ImagesList;
