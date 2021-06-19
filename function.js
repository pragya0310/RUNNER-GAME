function ground(){
    gr=createSprite(475,875,1000,10)
    gr.visible=false;
    grGroup.add(gr)
    
    gr=createSprite(1165,620,465,10)
    gr.visible=false;
    grGroup.add(gr)
    
    gr=createSprite(1640,680,330,10)
    gr.visible=false;
    grGroup.add(gr)
    
    gr=createSprite(2220,775,120,10)
    gr.visible=false;
    grGroup.add(gr)
    
    gr=createSprite(2405,680,130,10)
    gr.visible=false;
    grGroup.add(gr)
    
    gr=createSprite(2555,630,120,120)
    gr.visible=false;
    grGroup.add(gr)
    
    gr=createSprite(2775,490,330,10)
    gr.visible=false;
    grGroup.add(gr)
    
    gr=createSprite(3140,270,450,10)
    gr.visible=false;
    grGroup.add(gr)
      
    gr=createSprite(3390,580,500,10)
    gr.visible=false;
    grGroup.add(gr)
    

}
function obstacles(){
    o=createSprite(1246,600)
    o.addImage(db)
    o1.add(o)

    o.debug=true;
}