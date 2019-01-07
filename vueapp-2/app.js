new Vue( {

  el: '#vApp',
  data: {
    name: 'TheKibCoder',
    job: 'Lexion-Profiler',
    website: 'https://google.co.ke',
    age: 25,
    x: 0,
    y: 0
  },
  methods: {
    greet( time ){
      return 'Good ' + time +', ' + this.name;
    },
    ongeza(){
      this.age++;
    },
    updateXY( event ){
      this.x = event.offsetX;
      this.y = event.offsetY;
    }
  }

} );
