"use client";

import { useMemo } from "react";
import { useParams, usePathname } from "next/navigation";

import Person2Icon from '@mui/icons-material/Person2';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import  Settings  from '@mui/icons-material/Settings';
import WidgetsIcon from '@mui/icons-material/Widgets';
import MemoryIcon from '@mui/icons-material/Memory';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AltRouteIcon from '@mui/icons-material/AltRoute';

const useRoutes = () => {
    const pathname = usePathname();
    const params = useParams();

    const routes = useMemo(() => [
        {
            label: 'Versions',
            href: `/${params.appId}/versions`,
            icon: AltRouteIcon,
            active: pathname === `/${params.appId}/versions`
        },
        {
            label: 'Releases',
            href: `/${params.appId}/releases`,
            icon: LocalShippingIcon,
            active: pathname === `/${params.appId}/releases`
        },
        {
            label: 'Applications',
            href: `/applications/${params.appId}`,
            icon: WidgetsIcon,
            active: pathname === `/applications/${params.appId}`
        },
        {
            label: 'Services',
            href: `/${params.appId}/services`,
            icon: MemoryIcon,
            active: pathname === `/${params.appId}/services`
        },
        {
            label: 'Data',
            href: '/dashboard/data',
            icon: EqualizerIcon,
            active: pathname === `/dashboard/data`
        },
        {
            label: 'Profile',
            href: '/dashboard/profile',
            icon: Person2Icon,
            active: pathname === `/dashboard/profile`
        },
        {
            label: 'Settings',
            href: '/dashboard/settings',
            icon: Settings,
            active: pathname === `/dashboard/settings`
        },
    ],
    [pathname, params.appId]
    );

    return routes;
};

export default useRoutes;
