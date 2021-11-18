import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';

import { currentContainerAtom } from '../../../atoms/containers'
import { useContainers } from '../../../hooks/containers'

const ContainerShow = () => {
  const { containerId } = useParams();
  const { getContainerInfo } = useContainers();
  const { data: currentContainer } = useRecoilValue(currentContainerAtom);

  useEffect(() => {
    getContainerInfo(containerId);
  }, [containerId, getContainerInfo])

  return (
    <Grid container>
      <Grid item xs={8}>
        <Card>
          <CardContent>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Typography variant="h5">Informações</Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography variant="body1">
                  <b>Id:</b> {currentContainer?.Id || '-'}
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography variant="body1">
                  <b>Nome:</b> {currentContainer?.Name?.replaceAll('/', '') || '-'}
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography variant="body1">
                  <b>Data de criação:</b> {currentContainer?.Created.substring(0, 10).split('-').reverse().join('/') || '-'}
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography variant="body1">
                  <b>Status:</b> {currentContainer?.State?.Status || '-'}
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography variant="body1">
                  <b>Contagem de resets:</b> {currentContainer?.RestartCount}
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography variant="body1">
                  <b>Porta:</b> {
                    currentContainer?.HostConfig?.PortBindings ? currentContainer?.HostConfig?.PortBindings[
                      Object.keys(currentContainer?.HostConfig?.PortBindings)[0]
                    ][0].HostPort : '-'
                  }
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography variant="body1">
                  <b>Plataforma:</b> {currentContainer?.Platform || '-'}
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography variant="body1">
                  <b>Variáveis de ambiente:</b> {
                    currentContainer?.Config?.Env?.map((env) => <p>{env}</p>) || '-'
                  }
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography variant="body1">
                  <b>Imagem:</b> {currentContainer?.Config?.Image || '-'}
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography variant="body1">
                  <b>Rede:</b> {currentContainer?.NetworkSettings?.Bridge || '-'}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default ContainerShow;
