function red(){
    document.querySelector('#red').innerHTML=`<div class="box" id="component_red">
        <h1>red</h1>
        <input type="button" value="fire" onclick="
        document.querySelector('#component_red').style.backgroundColor='red';
        document.querySelector('#component_green').style.backgroundColor='red';
        document.querySelector('#component_blue').style.backgroundColor='red';"
        
    </div>`;
}
function green(){
    document.querySelector('#green').innerHTML=`<div class="box" id="component_green">
        <h1>green</h1>
        <input type="button" value="fire" onclick="
        document.querySelector('#component_red').style.backgroundColor='green';
        document.querySelector('#component_green').style.backgroundColor='green';
        document.querySelector('#component_blue').style.backgroundColor='green';"
    </div>`;
}
function blue(){
    document.querySelector('#blue').innerHTML=`<div class="box" id="component_blue">
        <h1>blue</h1>
        <input type="button" value="fire" onclick="
        document.querySelector('#component_red').style.backgroundColor='blue';
        document.querySelector('#component_green').style.backgroundColor='blue';
        document.querySelector('#component_blue').style.backgroundColor='blue';"
    </div>`;
}