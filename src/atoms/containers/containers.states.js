export const containersInitialState = {
  data: [{
    Id: "",
    Names: [],
    Image: "",
    ImageID: "",
    Command: "",
    Created: "",
    Ports: [],
    Labels: {
        browser: "",
        debuggerVersion: "",
        protocolVersion: "",
        puppeteerVersion: "",
        v8Version: "",
        webkitVersion: ""
    },
    State: "",
    Status: "",
    HostConfig: {
        NetworkMode: "",
    },
    NetworkSettings: {
        Networks: null,
    },
    Mounts: []
  }],
  loading: false,
  total: 0,
}

export const currentContainerInitialState = {
  data: {
    Id: "",
    Names: [],
    Image: "",
    ImageID: "",
    Command: "",
    Created: "",
    Ports: [],
    Labels: {
        browser: "",
        debuggerVersion: "",
        protocolVersion: "",
        puppeteerVersion: "",
        v8Version: "",
        webkitVersion: ""
    },
    State: "",
    Status: "",
    HostConfig: {
        NetworkMode: "",
    },
    NetworkSettings: {
        Networks: null,
    },
    Mounts: []
  },
  loading: false,
}

