define([
  'pex/materials/Material',
  'pex/gl/Context',
  'pex/gl/Program',
  'pex/utils/ObjectUtils',
  'pex/geom/Vec3',
  'pex/geom/Vec4',
  'lib/text!pex/materials/Diffuse.glsl'
  ], function(Material, Context, Program, ObjectUtils, Vec3, Vec4, DiffuseGLSL) {

  function Diffuse(uniforms) {
    this.gl = Context.currentContext.gl;
    var program = new Program(DiffuseGLSL);

    var defaults = {
      wrap: 1,
      pointSize : 1,
      lightPos : Vec3.fromValues(10, 20, 30),
      ambientColor : Vec4.fromValues(0, 0, 0, 1),
      diffuseColor : Vec4.fromValues(1, 1, 1, 1)
    };

    var uniforms = ObjectUtils.mergeObjects(defaults, uniforms);

    Material.call(this, program, uniforms);
  }

  Diffuse.prototype = Object.create(Material.prototype);

  return Diffuse;
});