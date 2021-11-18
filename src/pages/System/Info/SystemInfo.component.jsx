import { useCallback, useEffect, useState } from 'react';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';

import { useSystemInformation } from '../../../hooks/systemInformation'

const SystemInfo = () => {
  const [systemInfo, setSystemInfo] = useState(undefined);
  const [systemVersion, setSystemVersion] = useState(undefined);

  const { getInfo } = useSystemInformation();

  const getAllInfo = useCallback(async () => {
    try {
      const response = await getInfo();

      setSystemInfo(response.systemInfo);
      setSystemVersion(response.apiVersion);
    } catch (error) {
      console.log(error);
    }
  }, [getInfo])

  useEffect(() => {
    getAllInfo();
  }, [getAllInfo])

  return (
    <Grid container spacing={3}>
      <Grid item xs={5}>
        <Card>
          <CardContent>
            <Typography variant="h5">Versão</Typography>
            <br />
            <Typography variant="body1"><b>Plataforma:</b> {systemVersion?.Platform?.Name}</Typography>
            <Typography variant="body1"><b>Versão do docker:</b> {systemVersion?.Version}</Typography>
            <Typography variant="body1"><b>Versão da API:</b> {systemVersion?.ApiVersion}</Typography>
            <Typography variant="body1"><b>Servidor:</b> {systemInfo?.Name}</Typography>
            <Typography variant="body1"><b>Sistema Operacional:</b> {systemInfo?.OperatingSystem}</Typography>
            <Typography variant="body1"><b>Data de build:</b> {new Date(systemVersion?.BuildTime).toLocaleDateString('pt-br')}</Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={5}>
        <Card style={{ height: '100%' }}>
          <CardContent>
            <Typography variant="h5">Status</Typography>
            <br />
            <Typography variant="body1"><b>Contêineres:</b> {systemInfo?.Containers}</Typography>
            <Typography variant="body1"><b>Contêineres rodando:</b> {systemInfo?.ContainersRunning}</Typography>
            <Typography variant="body1"><b>Contêineres pausados:</b> {systemInfo?.ContainersPaused}</Typography>
            <Typography variant="body1"><b>Contêineres parados:</b> {systemInfo?.ContainersStopped}</Typography>
            <Typography variant="body1"><b>Imagens:</b> {systemInfo?.Images}</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default SystemInfo;
