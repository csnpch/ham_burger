import { InterfaceFullViewProject } from '@/common/components/FullViewProject/FullViewProject';
import { createContext } from 'react';

export interface FullViewContextInterface {
    onFullView: boolean,
    setOnFullView: (value: boolean) => void,
    dataFullView: InterfaceFullViewProject|null,
    setDataFullPreviewProject: (value: InterfaceFullViewProject) => void
}

export const FullViewContext = createContext<FullViewContextInterface>({
  onFullView: false,
  setOnFullView: () => {},
  dataFullView: null,
  setDataFullPreviewProject: () => {}
})