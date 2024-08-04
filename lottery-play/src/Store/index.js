import { configureStore, createSlice } from '@reduxjs/toolkit';

const lotterySlice = createSlice({
  name : "lotteryCheck",
  initialState : { lottArry : [{value : 1 , hide : false} ,{value : 2 , hide : false},{value : 3 , hide : false},{value : 4 , hide : false},{value : 5 , hide : false},{value :  6, hide : false},{value : 7 , hide : false},{value : 8 , hide : false},{value : 9 , hide : false}], count : 1, chances : 0 , checker : [], looptHold :1 , randomNum : "#", selectthis : "" , winState : "GAME START"},
  reducers :{
    hidebutton : (state, actions) => {

      


      if( state.looptHold <= state.chances ){
        // console.log(loopCheck);
        state.lottArry[actions.payload].hide = !state.lottArry[actions.payload].hide;
        if (state.count <= state.chances) {
          if (!state.checker.includes(actions.payload)) {
            state.checker.push(actions.payload);
            state.count = state.count + 1 ;
          } 
        }
        if (state.count > state.chances && state.count > 1 ) {
          // state.lottArry.map((item) => { item.hide = false ; item.count = 0; item.checker = []; item.chances = 0 ; state.looptHold = 1;})
          if(!(state.lottArry[actions.payload].value === state.randomNum ))
          {state.winState = "GAME COMPLETE"}
        }
  
        // console.log(state.count);
  
        if(state.lottArry[actions.payload].value === state.randomNum ){
          state.winState = "YOU WIN";
          state.looptHold = state.chances;

        }

          state.looptHold++;
        // console.log(loopCheck+ " " + state.chances + " " + state.count);
      }      
    },
    reShuffle : (state) => {
      let currentIndex = state.lottArry.length; 
      while (currentIndex !== 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex); 
        currentIndex--;
        [state.lottArry[currentIndex], state.lottArry[randomIndex]] = [state.lottArry[randomIndex], state.lottArry[currentIndex]];
      }
      state.lottArry.map((item) => { item.hide = false ; })
      state.randomNum = "#"; 
      state.count = 1;
      state.checker = [];
      state.chances = 0 ;
      state.looptHold = 1;
      state.selectthis = "";
      state.winState = "GAME START";
    },
    gameChance : (state, actions) => {

      // console.log(state.randomNum);
      state.selectthis = actions.payload;
      state.randomNum = Math.floor(Math.random() * 10);
      state.lottArry.map((item) => { item.hide = false ; })
      state.count = 1;
      state.checker = [];
      state.chances = 0 ;
      state.looptHold = 1;
      state.chances  = actions.payload;
    }
  }

})


const lotterystore = configureStore({reducer : {
  lottery : lotterySlice.reducer
}})

export const lotteryAction = lotterySlice.actions; 
export default lotterystore;