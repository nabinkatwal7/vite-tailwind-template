import { create } from "zustand";

interface PermissionState {
  permission: {
    hasPermission: boolean;
    accessComponent: string[];
  };
  // any used because for build purposes, change it during actual impl
  //  eslint-disable-next-line @typescript-eslint/no-explicit-any
  setPermission: any;
}

const usePermissionStore = create<PermissionState>((set) => ({
  permission: {
    hasPermission: false,
    accessComponent: [],
  },
  setPermission: (permission: {
    hasPermission: boolean;
    accessComponent: string[];
  }) => set(() => ({ permission })),
}));

export default usePermissionStore;
