const mixin = {
    methods:{
      dispatch(componentName,eventName,prarams){
        let parent = this.$parent || this.$root
        while (parent) {
          if(parent.$options.componentName === componentName){
            parent.$emit(eventName,prarams)
            return
          }else{
            parent = parent.$parent
          }
        }
      }
      // element 实现：
      // dispatch(componentName, eventName, params) {
      //   var parent = this.$parent || this.$root;
      //   var name = parent.$options.componentName;
  
      //   while (parent && (!name || name !== componentName)) {
      //     parent = parent.$parent;
  
      //     if (parent) {
      //       name = parent.$options.componentName;
      //     }
      //   }
      //   if (parent) {
      //     parent.$emit.apply(parent, [eventName].concat(params));
      //   }
      // },
    }
  }
  
  export default mixin