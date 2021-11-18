import { useCallback, useState } from 'react';
import { Button, Grid, TextField } from '@material-ui/core'

import { Modal } from '../../../components/Modal'
import { useImages } from '../../../hooks/images'

const ContainerCreate = ({ handleCloseModal, open }) => {
  const [imageName, setImageName] = useState();
  const { createImage } = useImages();

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();

    try {
      await createImage(imageName);

      alert('A sua imagem está sendo baixada');

      handleCloseModal();
    } catch(error) {
      alert(error);
    }
  }, [createImage, handleCloseModal, imageName])

  return (
    <Modal
      handleCloseModal={handleCloseModal}
      open={open}
      maxWidth="40%"
      title="Criação da imagem"
    >
      <form
        onSubmit={handleSubmit}
        id="image-create-modal"
      >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="name"
              label="Nome da imagem"
              onChange={(el) => setImageName(el.target.value)}
              required
              variant="outlined"
            />
          </Grid>

          <Grid container justify="flex-end" spacing={1}>
            <Grid item xs={2}>
              <Button color="primary" type="submit" variant="outlined">
                Enviar
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Modal>
  );
}

export default ContainerCreate;
