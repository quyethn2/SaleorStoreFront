import { OrderDirectionEnum } from "graphql/types.generated";
import { useState } from "react";

import { OrderDirection, ProductOrder, ProductOrderField } from "@/saleor/api";

export interface OptionOrder{
  name: ProductOrder
  price: ProductOrder
}

export enum ListOptionOrder {
  NAME_ASC = 'NAME_ASC',
  NAME_DESC = 'NAME_DESC',
  PRICE_ASC = 'PRICE_ASC',
  PRICE_DESC = 'PRICE_DESC'
}
export interface SortTableProps {
  onSort: (sortBy: ListOptionOrder) => void;
}

export function SortTable({ onSort }: SortTableProps) {
  const [selectSortValue, setSelectSortValue] = useState(ListOptionOrder.NAME_ASC);

  const onChangeSort = (e: any) => {
    setSelectSortValue(e.target.value);
    onSort(e.target.value);
  };

  return (
    <select
      className="border text-sm font-medium rounded-md text-gray-700 bg-gray-50 hover:border-blue-300 cursor-pointer"
      value={selectSortValue}
      onChange={(e) => onChangeSort(e)}
    >
      <option value={ListOptionOrder.NAME_ASC}>Order by name: A - Z</option>
      <option value={ListOptionOrder.NAME_DESC}>Order by name: Z - A</option>
      <option value={ListOptionOrder.PRICE_ASC}>Order by price: hight to low</option>
      <option value={ListOptionOrder.PRICE_DESC}>Order by price: low to hight</option>
    </select>
  );
}
