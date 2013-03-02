wintersmith  = require('wintersmith')
wsStylus     = require('./../')

describe "Nib integration", ->

  beforeEach (done)->

    # Install this plugin onto wintersmith
    wsStylus wintersmith, ->

      # Installed, now wintersmith can handle .styl
      done()

  it "should compile stylus with nib", (done)->

    # Parse contents
    wintersmith.ContentTree.fromDirectory 'test/contents/css', __dirname, (err, tree)->

      # For style.styl, we want to make sure styl is compiling using nib
      tree['style.styl'].render null, null, null, (err, content)->

        if content?
          content.should.equal("""
          body {
            -webkit-box-shadow: 0 0 1px #000;
            -moz-box-shadow: 0 0 1px #000;
            box-shadow: 0 0 1px #000;
          }""")
        # yay
        done()
        
      
