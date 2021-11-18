import { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { Button, Container, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import { Delete, PageviewOutlined, PlayArrow, Stop } from '@material-ui/icons';

import { containersAtom } from '../../../atoms/containers'
import { useContainers } from '../../../hooks/containers'
import { ContainerCreateModal } from '../Create';

const containerStatus = {
  running: 'Executando',
  exited: 'Parado',
  paused: 'Pausado',
}

const ContainerList = () => {
  const containers = useRecoilValue(containersAtom);
  const { getContainers, deleteContainer, deleteAllContainers, startContainer, stopContainer } = useContainers();
  const [openContainerModal, setOpenContainerModal] = useState(false);
  const history = useHistory();

  const handleDeleteAll = useCallback(async () => {
    try {
      await deleteAllContainers();
    } catch (error) {
      console.log(error);
    }
  }, [deleteAllContainers])

  const handleDelete = useCallback(async (containerId) => {
    try {
      await deleteContainer(containerId);
    } catch (error) {
      console.log(error);
    }
  }, [deleteContainer])

  const handleStart = useCallback(async (containerId) => {
    try {
      await startContainer(containerId);
    } catch (error) {
      console.log(error);
    }
  }, [startContainer])

  const handleStop = useCallback(async (containerId) => {
    try {
      await stopContainer(containerId);
    } catch (error) {
      console.log(error);
    }
  }, [stopContainer])

  useEffect(() => {
    getContainers();
  }, [getContainers]);

  return (
    <Container maxWidth="xl">
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '24px' }}>
        <Button
          onClick={() => setOpenContainerModal(true)}
          style={{ marginRight: '16px' }}
          type="button"
          variant="outlined"
        >
          Criar Container
        </Button>
        <Button color="secondary" onClick={() => handleDeleteAll()} variant="outlined">
          Excluir todos containers
        </Button>
      </div>

      <TableContainer component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Imagem</TableCell>
              <TableCell>Porta</TableCell>
              <TableCell>Status</TableCell>
              <TableCell align="center">Ações</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {containers.data.map((row) => (
              <TableRow key={row.Id}>
                <TableCell>{row.Names[0]?.replaceAll('/', '') || '-'}</TableCell>
                <TableCell>{row.Image || '-'}</TableCell>
                <TableCell>{row.Ports[0]?.PublicPort || '-'}</TableCell>
                <TableCell>{containerStatus[row.State] || '-'}</TableCell>
                <TableCell align="center">
                  <IconButton onClick={() => history.push(`/containers/${row.Id}`)}>
                    <PageviewOutlined />
                  </IconButton>
                  {row.State === 'running'
                    ?<IconButton color="primary" onClick={() => handleStop(row.Id)}>
                        <Stop />
                      </IconButton>
                    : <>
                        <IconButton style={{ color: '#00E497' }} onClick={() => handleStart(row.Id)}>
                          <PlayArrow />
                        </IconButton>

                        <IconButton color="secondary" onClick={() => handleDelete(row.Id)}>
                          <Delete />
                        </IconButton>
                      </>
                  }
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {openContainerModal && <ContainerCreateModal open={openContainerModal} handleCloseModal={() => setOpenContainerModal(false)} />}
    </Container>
  );
}

export default ContainerList;
