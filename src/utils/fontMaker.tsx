// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Types
import { IconDefinition, SizeProp } from "@fortawesome/fontawesome-svg-core";

type fontType = {
  icon: IconDefinition;
  size?: SizeProp;
  width?: string;
};

export function fontMaker({ icon, size = "lg", width = "50" }: fontType): JSX.Element {
  return <FontAwesomeIcon icon={icon} size={size} width={width} />;
}
