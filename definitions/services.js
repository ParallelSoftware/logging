// Place service container definitions here.

exports.root = {
  type: 'blank-container'
};

exports.configs = {
  type: 'docker',
  specific: {
    repositoryUrl: 'https://github.com/AdrianRossouw/test-configs.git',
    execute: {
      args: '-d',
    }
  }
};

exports.logspout = {
  type: 'docker',
  specific: {
    name: 'progrium/logspout',
    execute: {
      args: '-d -v=/var/run/docker.sock:/tmp/docker.sock -p 8000:8001',
      exec: 'syslog://192.168.59.103:5514'
    }
  }
};

exports.elk = {
  type: 'docker',
  specific: {
    name: 'pblittle/docker-logstash',
    execute: {
      args: '-d -p 5515:5515/udp -p 9292:9292 -p 9200:9200 -e LOGSTASH_CONFIG_URL=https://gist.githubusercontent.com/AdrianRossouw/f1d56196ed1ce56f4d3f/raw/213e86c8595c3584a9a07814130fc04d32e2aa12/logstash.config'
    }
  }
};

exports.web = {
 type: 'docker',
   specific: {
     name: 'nginx',
     execute: {
       args: '-d -p 80:80'
     }
   }
}; 
