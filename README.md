Tecnologia utilizada: React

Ambiente do Docker usado para testes: Windows 11

# Instalação

Para iniciar o projeto é necessário seguir os seguintes passos:
- Intalar o yarn via npm `npm install --global yarn`
- Servidor com o docker
- Preencher o arquivo .env.development com o endereço e porta do servidor que o docker esta. Ex: http://192.168.0.1:2375
- Executar o comando `yarn install --check-files` e `yarn start`
- A aplicação será iniciada na porta 3000 do seu localhost, e pode ser acessada pelo navegador

# Configuração Monitoramento e CORS
- Configurar o /etc/docker/daemon.json
```JSON 
{
  "api-cors-header": "*",
  "builder": {
    "gc": {
      "defaultKeepStorage": "20GB",
      "enabled": true
    }
  },
  "experimental": true,
  "features": {
    "buildkit": true
  },
  "metrics-addr": "0.0.0.0:9323"
}
```
- Criar os containers com Grafana e Prometheus

```` 
docker service create --replicas 1 --name my-grafana --mount type=bind,source=PATH/grafana.yml,destination=/etc/grafana/grafana.yml --publish published=3000,target=3000,protocol=tcp grafana/grafana

docker service create --replicas 1 --name my-prometheus --mount type=bind,source=PATH/prometheus.yml,destination=/etc/prometheus/prometheus.yml --publish published=9090,target=9090,protocol=tcp prom/prometheus
````                       

Pronto!!!!
Você ja pode acessar o grafana e prometheus nas respectivas urls: localhost:3000 e localhost:9090
# Grupo:
- Douglas Lopes Silva - 082170005
- Luis Henrique Miranda Rodrigues - 082170014
- Sabrina Bastos de Almeida - 082170027
- Igor Lacivita - 082170035

Link do GitHub: https://github.com/DouglasLSilva/containersSR
