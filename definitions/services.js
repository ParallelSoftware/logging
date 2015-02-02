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
      args: '-d -v=/var/run/docker.sock:/tmp/docker.sock',
      exec: 'syslog://192.168.59.103:55555'
    }
  }
};

exports.elk = {
  type: 'docker',
  specific: {
    name: 'pblittle/docker-logstash',
    execute: {
      args: '-d -p 55555:55555/udp -p 9292:9292 -p 9200:9200'
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
