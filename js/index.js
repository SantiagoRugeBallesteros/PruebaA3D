function start(){
	
	var pos, $id=function(d){ return document.getElementById(d);};
	
	
	var tierra = new PhiloGL.O3D.Sphere(
		{
			
			nlat:30,
			nlong:30,
			radius:3,
			textures: 'https://lizgar.github.io/A3D/js/earth.jpg'
		}
	);
	
	
PhiloGL('glCanvas',
		{
	camera: {
		position: {
			x:0, y:0, z:-10
		}
	},
	
	textures:{
		
		src: ['https://lizgar.github.io/A3D/js/earth.jpg'],
		parameters: [{
			name: 'TEXTURE_MAG_FILTER',
			value: 'LINEAR'
		},{
			
			name: 'TEXTURE_MIN_FILTER',
			value: 'LINEAR_MIPMAP_NEAREST',
			generateMipmap: true
		}
			
		]
	},
	
	

	
	onLoad: function(app){
		
		var gl= app.gl,
			program = app.program,
			scene = app.scene,
			canvas = app.canvas,
			camera = app.camera;

		
		gl.clearColor(1.0, 1.0, 1.0, 1.0);
		gl.clearDepth(1.0);
		gl.enable(gl.DEPTH_TEST);
		gl.depthFunc(gl.LEQUAL);
		gl.viewport(0,0, +canvas.width, +canvas.height);
	
		
		tierra.update();
		scene.add(tierra);
		draw();
		
		function draw(){
			
			gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPHT_BUFFER_BIT);
			
			
			scene.render();
			
			PhiloGL.Fx.requestAnimationFrame(draw);
		}
		
		
	}
	
	
} );
}