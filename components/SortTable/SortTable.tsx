import { OrderDirectionEnum } from "graphql/types.generated";
import { useState } from "react";

import { OrderDirection } from "@/saleor/api";

export interface SortTableProps {
  onSort: (sortBy: OrderDirection) => void;
}

export function SortTable({ onSort }: SortTableProps) {
  const [selectSortValue, setSelectSortValue] = useState(OrderDirectionEnum.ASC);

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
      <option value={OrderDirectionEnum.ASC}>Order by name: A - Z</option>
      <option value={OrderDirectionEnum.DESC}>Order by name: Z - A</option>
    </select>
  );
}
