import React from "react";
import { Field, FieldRootProps, HStack, Text } from "@chakra-ui/react";
import useApps from "@/lib/hooks/useApps";
import AppInfo from "../../types/AppInfo";
import AppImage from "./AppImage";

const AppLauncherInput: React.FC = () => {
  const [value, setValue] = React.useState("");

  const { value: apps } = useApps(value);

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setValue(e.target.value);
  // };

  const rootProps: FieldRootProps = {
    flexGrow: 1,
  };

  // const inputProps: AutoCompleteInputProps = {
  //   value: value,
  //   onChange: handleChange,
  // };

  console.log(apps);

  return (
    <Field.Root {...rootProps}>
      {/* <AutoComplete openOnFocus>
        <AutoCompleteInput {...inputProps} />
        <AutoCompleteList>
          {apps &&
            apps.map((app: AppInfo, i: number) => {
              return (
                <AutoCompleteItem key={`${app.name}-${i}`} value={app.name}>
                  <HStack alignItems={"middle"}>
                    <AppImage icon={app.iconInfo} boxSize={"32px"} />
                    <Text lineHeight={"32px"}>{app.name}</Text>
                  </HStack>
                </AutoCompleteItem>
              );
            })}
        </AutoCompleteList>
      </AutoComplete> */}
    </Field.Root>
  );
};

export default AppLauncherInput;
