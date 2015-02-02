// Place service container definitions here.

exports.root = {
  type: 'blank-container'
};

exports.logspout = {
  type: 'docker',
  specific: {
    name: 'progrium/logspout',
    execute: {
      args: '-d -v=/var/run/docker.sock:/tmp/docker.sock',
      exec: 'syslog://logs.papertrailapp.com:55555'
    }
  }
};

exports.elk = {
  type: 'docker',
  specific: {
    name: 'pblittle/docker-logstash',
    execute: {
      args: '-d 9292:9292 -p -p 9200:9200'
    }
  }
};

exports.web = {
 type: 'docker',
   specific: {
     name: 'nginx',
     execute: {
       args: '-p 80:80 -d'
     }
   }
}; 
