export default (state:any,action:any)=>{
    switch(action.type){
        case 'ADD_TRANSACTION':
            const trans={
                id:(state.transactions.length+1),
                ...action.payload}
            return {
                ...state,
                transactions:[
                    ...state.transactions,
                    trans
                ]
            };

        case 'REMOVE_TRANSACTION':
            return {
                ...state,
                transactions:state.transactions.filter((item:any)=>item.id!==action.payload)
            };

        default:
            return state;
    }
}