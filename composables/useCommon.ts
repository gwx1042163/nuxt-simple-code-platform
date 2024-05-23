export default function useCommon(emits:any,showData:any) {
  const currentEle = ref({});
  let index = ref(0);
  const change = (item: any) => {
    currentEle.value = item.added.element;
    index.value = item.added.newIndex;
  };

  const add = (item) => {
    emits("createComp", currentEle.value, showData, index.value);
  };
  return {
    change,add
  }
}
