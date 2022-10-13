const changeNavState = (state=true, action)=>{
    switch (action.type) {
        case 'enableNav':return state=true
        case 'disableNav':return state=false
        default:return state
    } 
}

export default changeNavState