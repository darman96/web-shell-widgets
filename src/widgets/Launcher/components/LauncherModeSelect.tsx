import React from "react";
import {
  createListCollection,
  HStack,
  IconButton,
  Portal,
  Select,
  SelectValueChangeDetails,
  useSelectContext,
} from "@chakra-ui/react";
import { BiX } from "react-icons/bi";
import LauncherMode, { LauncherModeType } from "../types/LauncherMode";
import { useLauncher } from "../context/LauncherContext";
import { launcherModesArray } from "../constants/launcherModes";

// const SelectTrigger = () => {
//   const select = useSelectContext();
//   const items = select.selectedItems as LauncherMode[];

//   return (
//     <IconButton {...select.getTriggerProps()}>
//       {select.hasSelectedItems ? items[0]?.icon : <BiX />}
//     </IconButton>
//   );
// };

const LauncherModeSelect: React.FC = () => {
  const { selectedMode, setSelectedMode } = useLauncher();
  const collection = createListCollection({
    items: launcherModesArray,
    itemToValue: (item) => item.type,
  });

  const handleChange = (e: SelectValueChangeDetails<LauncherMode>) => {
    setSelectedMode(e.value[0] as LauncherModeType);
  };

  const rootProps = {
    collection: collection,
    value: [selectedMode as string],
    onValueChange: handleChange,
    width: "auto",
  };

  return (
    <Select.Root {...rootProps}>
      <Select.HiddenSelect />
      <Select.Control>
        {/* <SelectTrigger /> */}
        <Select.Trigger>
          <Select.ValueText placeholder="Select a mode" />
          <Select.IndicatorGroup>
            <Select.Indicator />
          </Select.IndicatorGroup>
        </Select.Trigger>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content width={"200px"}>
            {collection.items.map((item) => (
              <Select.Item item={item.type} key={item.name}>
                <HStack>
                  {item.icon}
                  {item.name}
                </HStack>
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  );
};

export default LauncherModeSelect;
