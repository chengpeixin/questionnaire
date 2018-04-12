const mutations = {
  addbrand(state,params){
    for (let i=0;i<state.brands.length;i++){
      const el = state.brands[i]
      if (el.name == params.name){
        alert('不能选择重复的品牌！')
        return;
      }
    }
    state.brands.push(params)
    history.back()
  },
  rmbrand(state,params){
    for (let i = 0; i < state.brands.length; i++) {
      const el = state.brands[i]
      if (el.name == params.name) {
        state.brands.splice(i, 1)
      }
    }
  },
  modifybrand(state,params){
    for (let i=0;i<state.brands.length;i++){
      const el = state.brands[i]
      if (el.name == params.name){
        alert('您已经选择该品牌')
        return;
      }
      state.brands[state.brandIndex] = params;
      history.back();
      return;
    }
  },
  changeindex(state,params){
    state.brandIndex = params;
  },
  defaultproblem(state, params) {
    // state.brands[params.index].wentis
  },
  addproblem(state,params){
    state.brands[params.index].wentis.push(params.data)
  }
}

export default mutations;
