import {
  createListCollection,
  SelectValueChangeDetails,
  Select,
  Portal,
} from "@chakra-ui/react";
import React, { useMemo } from "react";
import { useLauncher } from "../../context/LauncherContext";
import useAsync from "@/lib/hooks/useAsync";

interface Props {}

const OllamaModelSelector: React.FC<Props> = () => {
  const { selectedOllamaModel, setSelectedOllamaModel } = useLauncher();
  // const state = useAsync(
  //   async () => await listOllamaModels(),
  //   [listOllamaModels]
  // );
  const state = useAsync(() => Promise.resolve(["model1", "model2"]), []);

  const collection = useMemo(() => {
    return createListCollection({
      items: state.value ?? [],
      itemToString: (item) => item,
      itemToValue: (item) => item,
    });
  }, [state.value]);

  const handleChange = (e: SelectValueChangeDetails<string>) => {
    setSelectedOllamaModel(e.value[0]);
  };

  const tooltipContent = selectedOllamaModel
    ? `Using model: ${selectedOllamaModel}`
    : "Select an Ollama model to use";

  const rootProps = {
    collection: collection,
    value: selectedOllamaModel ? [selectedOllamaModel as string] : [],
    onValueChange: handleChange,
    width: "200px",
  };

  return (
    <Select.Root {...rootProps}>
      <Select.HiddenSelect />
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select a model" />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {collection.items.map((item) => (
              <Select.Item item={item} key={item}>
                {item}
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  );
};

export default OllamaModelSelector;
