<template>
  <li
    :class="[
      'l-select-option',
      isChecked ? 'is-checked' : '',
      disabled ? 'is-disabled' : '',
      filterable ? 'is-filtered' : ''
      ]" 
    @click.stop="click">
    <slot>{{ text }}</slot>
  </li>
</template>
<script>
  export default {
    name:"LOption",
    componentName:'LOption',
    props:{
      value:[Number,Boolean,String],
      label: String,
      disabled: Boolean,
      nodata: Boolean
    },
    data() {
      return {};
    },
    computed:{
      _select(){
        let parent = this.$parent
        while (parent) {
          if(parent.$options.componentName === 'LSelect') return parent
          parent = parent.$parent
        }
      },
      isChecked(){
        return this._select.value === this.value
      },
      text(){
        return (this.$slots.default && this.$slots.default[0].text) || this.label
      },
      filterable(){
        if(this._select.filterable){
          return this._select.showOptions ? this.text.indexOf(this._select.searchText) <= -1 : true
        }
      },
    },
    methods:{
      click(){
        if(this.disabled || !this._select) return
        if(this.value !== this._select.value){
          this._select.$emit('input',this.value)
          this._select.$emit('change',this.value)
        }
        this._select.setSearchText(this.text)
        this._select.showOptions = !this._select.showOptions
      }
    },
    created(){
      this.$set(this._select.options,this.value,this.text)
    }
  };

</script>