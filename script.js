grid = [{
    t1 : 0,
    t2 : 0,
    t3 : 0
},{
    t4 : 0,
    t5 : 0,
    t6 : 0
},{
    t7 : 0,
    t8 : 0,
    t9 : 0
},
]

let cnt = 0;
player = 1;
// buttons = document.getElementsByClassName('btn');
let any_win = false;
//for clickable events
document.getElementById('t1').addEventListener('click', ()=>{
    // player == 1 ? console.log("ppap") : console.log('empty');
    if(grid[0].t1 != 1 && grid[0].t1 != 2){
        player == 1 ? document.getElementById('t1').innerHTML = "O" : document.getElementById('t1').innerHTML = "X" ; 
        player == 1 ? grid[0].t1 = 1 : grid[0].t1 = 2 ;
        if(any_player_win()){
            any_win = true;
            str = "Player " + player +" win !";
            alert(str);
            location.reload();
        }
        cnt+=1;
        is_game_over();
        player == 1 ? player = 2 : player = 1;
    }else{
        alert('that box is already choosen');
    }
});

document.getElementById('t2').addEventListener('click', ()=>{
    if(grid[0].t2 != 1 && grid[0].t2 != 2){
        player == 1 ? document.getElementById('t2').innerHTML = "O" : document.getElementById('t2').innerHTML = "X" ; 
        player == 1 ? grid[0].t2 = 1 : grid[0].t2 = 2 ;
        if(any_player_win()){
            any_win = true;
            str = "Player " + player +" win !";
            alert(str);
            location.reload();
        }
        cnt+=1;
        is_game_over();
        player == 1 ? player = 2 : player = 1;
    }else{
        alert('that box is already choosen');
    }
});

document.getElementById('t3').addEventListener('click', ()=>{
    if(grid[0].t3 != 1 && grid[0].t3 != 2){
        player == 1 ? document.getElementById('t3').innerHTML = "O" : document.getElementById('t3').innerHTML = "X" ; 
        player == 1 ? grid[0].t3 = 1 : grid[0].t3 = 2 ;
        if(any_player_win()){
            any_win = true;
            str = "Player " + player +" win !";
            alert(str);
            location.reload();
        }
        cnt+=1;
        is_game_over();
        player == 1 ? player = 2 : player = 1;
    }else{
        alert('that box is already choosen');
    }
})

document.getElementById('t4').addEventListener('click', ()=>{
    if(grid[1].t4 != 1 && grid[1].t4 != 2){
        player == 1 ? document.getElementById('t4').innerHTML = "O" : document.getElementById('t4').innerHTML = "X" ; 
        player == 1 ? grid[1].t4 = 1 : grid[1].t4 = 2 ;
        if(any_player_win()){
            any_win = true;
            str = "Player " + player +" win !";
            alert(str);
            location.reload();
        }
        cnt+=1;
        is_game_over();
        player == 1 ? player = 2 : player = 1;
    }else{
        alert('that box is already choosen');
    }
})

document.getElementById('t5').addEventListener('click', ()=>{
    if(grid[1].t5 != 1 && grid[1].t5 != 2){
        player == 1 ? document.getElementById('t5').innerHTML = "O" : document.getElementById('t5').innerHTML = "X" ; 
        player == 1 ? grid[1].t5 = 1 : grid[1].t5 = 2 ;
        if(any_player_win()){
            any_win = true;
            str = "Player " + player +" win !";
            alert(str);
            location.reload();
        }
        cnt+=1;
        is_game_over();
        player == 1 ? player = 2 : player = 1;
    }else{
        alert('that box is already choosen');
    }
})

document.getElementById('t6').addEventListener('click', ()=>{
    if(grid[1].t6 != 1 && grid[1].t6 != 2){
        player == 1 ? document.getElementById('t6').innerHTML = "O" : document.getElementById('t6').innerHTML = "X" ; 
        player == 1 ? grid[1].t6 = 1 : grid[1].t6 = 2 ;
        if(any_player_win()){
            any_win = true;
            str = "Player " + player +" win !";
            alert(str);
            location.reload();
        }
        cnt+=1;
        is_game_over();
        player == 1 ? player = 2 : player = 1;
    }else{
        alert('that box is already choosen');
    }
})

document.getElementById('t7').addEventListener('click', ()=>{
    if(grid[2].t7 != 1 && grid[2].t7 != 2){
        player == 1 ? document.getElementById('t7').innerHTML = "O" : document.getElementById('t7').innerHTML = "X" ; 
        player == 1 ? grid[2].t7 = 1 : grid[2].t7 = 2 ;
        if(any_player_win()){
            any_win = true;
            str = "Player " + player +" win !";
            alert(str);
            location.reload();
        }
        cnt+=1;
        is_game_over();
        player == 1 ? player = 2 : player = 1;
    }else{
        alert('that box is already choosen');
    }
})

document.getElementById('t8').addEventListener('click', ()=>{
    if(grid[2].t8 != 1 && grid[2].t8 != 2){
        player == 1 ? document.getElementById('t8').innerHTML = "O" : document.getElementById('t8').innerHTML = "X" ; 
        player == 1 ? grid[2].t8 = 1 : grid[2].t8 = 2 ;
        if(any_player_win()){
            any_win = true;
            str = "Player " + player +" win !";
            alert(str);
            location.reload();
        }
        cnt+=1;
        is_game_over();
        player == 1 ? player = 2 : player = 1;
    }else{
        alert('that box is already choosen');
    }
})

document.getElementById('t9').addEventListener('click', ()=>{
    if(grid[2].t9 != 1 && grid[2].t9 != 2){
        player == 1 ? document.getElementById('t9').innerHTML = "O" : document.getElementById('t9').innerHTML = "X" ; 
        player == 1 ? grid[2].t9 = 1 : grid[2].t9 = 2 ;
        if(any_player_win()){
            any_win = true;
            str = "Player " + player +" win !";
            alert(str);
            location.reload();
        }
        cnt+=1;
        is_game_over();
        player == 1 ? player = 2 : player = 1;
    }else{
        alert('that box is already choosen');
    }
})



function is_game_over(){
    if(cnt >= 9 && !any_win){
        alert("TIE \n Game Over");
        location.reload();
    }
}

function any_player_win(){
    if(grid[0].t1 == 1 && grid[0].t2 == 1 && grid[0].t3 == 1){
        return true;
    }

    if(grid[0].t1 == 2 && grid[0].t2 == 2 && grid[0].t3 == 2){
        return true;
    }

    if(grid[1].t4 == 1 && grid[1].t5 == 1 && grid[1].t6 == 1){
        return true;
    }

    if(grid[1].t4 == 2 && grid[1].t5 == 2 && grid[1].t6 == 2){
        return true;
    }

    if(grid[2].t7 == 1 && grid[2].t8 == 1 && grid[2].t9 == 1){
        return true;
    }

    if(grid[2].t7 == 2 && grid[2].t8 == 2 && grid[2].t9 == 2){
        return true;
    }

    if(grid[0].t1 == 1 && grid[1].t5 == 1 && grid[2].t9 == 1){
        return true;
    }

    if(grid[0].t1 == 2 && grid[1].t5 == 2 && grid[2].t9 == 2){
        return true;
    }

    if(grid[0].t3 == 1 && grid[1].t5 == 1 && grid[2].t7 == 1){
        return true;
    }

    if(grid[0].t3 == 2 && grid[1].t5 == 2 && grid[2].t7 == 2){
        return true;
    }

    if(grid[0].t1 == 1 && grid[1].t4 == 1 && grid[2].t7 == 1){
        return true;
    }

    if(grid[0].t1 == 2 && grid[1].t4 == 2 && grid[2].t7 == 2){
        return true;
    }

    if(grid[0].t2 == 1 && grid[1].t5 == 1 && grid[2].t8 == 1){
        return true;
    }

    if(grid[0].t2 == 2 && grid[1].t5 == 2 && grid[2].t8 == 2){
        return true;
    }

    if(grid[0].t3 == 1 && grid[1].t6 == 1 && grid[2].t9 == 1){
        return true;
    }

    if(grid[0].t3 == 2 && grid[1].t6 == 2 && grid[2].t9 == 2){
        return true;
    }

    return false;
    
}

// any_player_win();