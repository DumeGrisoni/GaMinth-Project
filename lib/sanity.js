import {
  createPreviewSubscriptionHook,
  createCurrentuserHook,
} from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";
import { config } from "./config";

export const urlFor = (src) => createImageUrlBuilder(config).image(src);

export const userPreviewSub = createPreviewSubscriptionHook(config);

export const currentUser = createCurrentuserHook(config);
