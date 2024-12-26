"use client";

import {useMediaQuery} from "@mantine/hooks";
import classes from './NavigationControl.module.css';
import {Box, em, Group, rem} from "@mantine/core";
import NavigationButton from "@/components/NavigationControl/NavigationButton/NavigationButton";
import NavigationBreadcrumbs from "@/components/NavigationControl/NavigationBreadcrumbs/NavigationBreadcrumbs";
import {useContext} from "react";
import {SideBarContext} from "@/utils/Contexts/Contexts";

export default function NavigationControl() {
    const { opened } = useContext(
        SideBarContext
    );
    const isMobile = useMediaQuery(`(max-width: ${em(750)})`);

    return isMobile === false && (
        <>
            <div
                style={{
                    left: opened ? rem(336) : rem(112)
                }}
                className={classes.wrapper}
            >
                <Box className={classes.inner}>
                    <Group wrap="nowrap" gap={rem(16)}>
                        <Group wrap="nowrap" gap={rem(8)}>
                            <NavigationButton type="back" />
                            <NavigationButton type="forward" />
                            <NavigationButton type="refresh" />
                        </Group>
                        <NavigationBreadcrumbs />
                    </Group>
                </Box>
            </div>
        </>
    );
}