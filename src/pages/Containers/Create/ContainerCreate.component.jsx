import { useCallback, useState } from 'react';
import { Button, Grid, TextField } from '@material-ui/core'

import { Modal } from '../../../components/Modal'
import { useContainers } from '../../../hooks/containers'

const ContainerCreate = ({ handleCloseModal, open }) => {
  const [data, setData] = useState();
  const { createContainer } = useContainers();

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();

    const containerData = {
      Hostname: data.Hostname,
      Tty: true,
      OpenStdin: false,
      Image: data.Image,
      NetworkDisabled: false,
      ExposedPorts: {
          [`${data.Port}/tcp`]: {}
      },
      HostConfig: {
          PortBindings: {
              [`${data.Port}/tcp`]: [
                  {
                      HostPort: data.Port,
                  },
              ],
          },
          "AutoRemove": true,
      },
    };

    try {
      await createContainer(containerData, data.name);

      handleCloseModal();
    } catch (error) {
      alert(error);
    }

  }, [createContainer, data, handleCloseModal])

  return (
    <Modal
      handleCloseModal={handleCloseModal}
      open={open}
      maxWidth="40%"
      title="Criação do container"
    >
      <form
        onSubmit={handleSubmit}
        id="container-create-modal"
      >
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              name="name"
              label="Nome"
              onChange={(el) => setData(prevState => ({...prevState, name: el.target.value}))}
              required
              variant="outlined"
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              name="Image"
              label="Nome da imagem"
              onChange={(el) => setData(prevState => ({...prevState, Image: el.target.value}))}
              required
              variant="outlined"
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              name="Port"
              label="Porta da aplicação"
              onChange={(el) => setData(prevState => ({...prevState, Port: el.target.value}))}
              required
              variant="outlined"
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              name="Hostname"
              label="Hostname"
              onChange={(el) => setData(prevState => ({...prevState, Hostname: el.target.value}))}
              variant="outlined"
            />
          </Grid>

          <Grid container justify="flex-end" spacing={1}>
            <Grid item xs={2}>
              <Button
                color="secondary"
                onClick={handleCloseModal}
                type="button"
                variant="outlined"
              >
                Cancelar
              </Button>
            </Grid>

            <Grid item xs={2}>
              <Button color="primary" type="submit" variant="outlined">Enviar</Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Modal>
  );
}

export default ContainerCreate;
