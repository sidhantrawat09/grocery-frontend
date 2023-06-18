import React, { useEffect, useState } from "react";
import { menuItemModel } from "../../../Interfaces/Index";
import MenuItemCard from "./MenuItemCard";
import { useDispatch } from "react-redux";
import { useGetMenuItemsQuery } from "../../../Apis/menuItemApi";
import { setMenuItem } from "../../../Storage/Redux/menuItemSlice";

export default function MenuItemList() {
  // const [menuItems, setMenuItems] = useState<menuItemModel[]>([]);
  const dispatch = useDispatch();
  const { data, isLoading } = useGetMenuItemsQuery(null);

  useEffect(() => {
    if (!isLoading) {
      dispatch(setMenuItem(data.result));
    }
  }, [isLoading]);

  if (isLoading) {
    return <div>
      Loading...
    </div>
  }

  return (
    <div className="container row">
      {data?.result.length > 0 &&
        data.result.map((menuItem: menuItemModel, index: number) => (
          <MenuItemCard menuItem={menuItem} key={index} />
        ))}
    </div>
  );
}
