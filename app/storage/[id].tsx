import { ConfigState, decreaseTools } from '@/redux/features/storageSlice';
import { AppDispatch } from '@/redux/store';
import { useDispatch } from 'react-redux';
import { increaseTools } from '@/redux/features/storageSlice';

function ConfigItem({ item }: { item: ConfigState }) {
  const dispatch = useDispatch<AppDispatch>();

  const toolIncrement = (id: string) => {
    dispatch(increaseTools(id));
  };

  const toolDecrement = (id: string) => {
    dispatch(decreaseTools(id));
  };
  return (
    <div>
      <div>Размер кофемашины: {item.config}</div>
      <div>Количество напитков: {item.drinksQty}</div>

      <div className="flex items-center justify-between p-24">
        <button onClick={() => toolDecrement(item.id)}>-</button>
        <div>{item.toolsQty}</div>
        <button onClick={() => toolIncrement(item.id)}>+</button>
      </div>
    </div>
  );
}

export default ConfigItem;
