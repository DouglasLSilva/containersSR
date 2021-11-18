import { useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { Card, CardActionArea, CardContent, Grid, Typography } from '@material-ui/core';

import { containersAtom } from '../../atoms/containers'
import { imagesAtom } from '../../atoms/images'
import { useContainers } from '../../hooks/containers'
import { useImages } from '../../hooks/images'

const Dashboard = () => {
  const containers = useRecoilValue(containersAtom);
  const images = useRecoilValue(imagesAtom);

  const { getImages } = useImages();
  const { getContainers } = useContainers();
  const history = useHistory();

  const getActiveContainersCount = useCallback(() => {
    return containers.data.filter((container) => container.State === 'running').length;
  }, [containers.data])

  useEffect(() => {
    getContainers();
    getImages();
  }, [getContainers, getImages])

  return (
    <Grid container spacing={3}>
      <Grid item xs={4}>
        <Card>
          <CardActionArea onClick={() => history.push('/containers')}>
            <CardContent>
              <Typography variant="h5">Contêineres</Typography>
              <br />
              <Typography variant="body2">Total: {containers.total}</Typography>
              <Typography variant="body2">
                Ativos: {getActiveContainersCount()}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>

      <Grid item xs={4}>
        <Card style={{ height: '100%' }}>
          <CardActionArea onClick={() => history.push('/images')}>
            <CardContent>
              <Typography variant="h5">Imagens</Typography>
              <br />
              <Typography variant="body2">Total: {images.total}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Dashboard;
