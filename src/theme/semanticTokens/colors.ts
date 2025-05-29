import {defineSemanticTokens} from "@chakra-ui/react";

const colors = defineSemanticTokens.colors({
  bg: {
    DEFAULT: {
      value: {
        _light: "{colors.white}",
        _dark: "{colors.black}",
      },
    },
    subtle: {
      value: {
        _light: "{colors.gray.50}",
        _dark: "{colors.gray.950}",
      },
    },
    muted: {
      value: {
        _light: "{colors.gray.100}",
        _dark: "{colors.gray.900}",
      },
    },
    emphasized: {
      value: {
        _light: "{colors.gray.200}",
        _dark: "{colors.gray.800}",
      },
    },
    inverted: {
      value: {
        _light: "{colors.black}",
        _dark: "{colors.white}",
      },
    },
    panel: {
      value: {
        _light: "{colors.white}",
        _dark: "{colors.gray.900}",
      },
    },
    error: {
      value: {
        _light: "{colors.red.50}",
        _dark: "{colors.red.950}",
      },
    },
    warning: {
      value: {
        _light: "{colors.orange.50}",
        _dark: "{colors.orange.950}",
      },
    },
    success: {
      value: {
        _light: "{colors.green.50}",
        _dark: "{colors.green.950}",
      },
    },
    info: {
      value: {
        _light: "{colors.blue.50}",
        _dark: "{colors.blue.950}",
      },
    },
  },
  border: {
    DEFAULT: {
      value: {
        _light: "{colors.gray.200}",
        _dark: "{colors.gray.800}",
      },
    },
    muted: {
      value: {
        _light: "{colors.gray.100}",
        _dark: "{colors.gray.900}",
      },
    },
    subtle: {
      value: {
        _light: "{colors.gray.50}",
        _dark: "{colors.gray.950}",
      },
    },
    emphasized: {
      value: {
        _light: "{colors.gray.300}",
        _dark: "{colors.gray.700}",
      },
    },
    inverted: {
      value: {
        _light: "{colors.gray.800}",
        _dark: "{colors.gray.200}",
      },
    },
    panel: {
      value: {
        _light: "{colors.gray.200}",
        _dark: "{colors.gray.700}",
      },
    },
    error: {
      value: {
        _light: "{colors.red.500}",
        _dark: "{colors.red.400}",
      },
    },
    warning: {
      value: {
        _light: "{colors.orange.500}",
        _dark: "{colors.orange.400}",
      },
    },
    success: {
      value: {
        _light: "{colors.green.500}",
        _dark: "{colors.green.400}",
      },
    },
    info: {
      value: {
        _light: "{colors.blue.500}",
        _dark: "{colors.blue.400}",
      },
    },
  },
})

export default colors;