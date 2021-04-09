import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: string;
};

/** Inputs to create a new Collection. */
export type AddCollectionInput = {
  /** Name of the collection. Used in Photo Info links. */
  name: Scalars["String"];
  tag: Scalars["String"];
  /** A vignette used to introduce the subject. */
  description: Scalars["String"];
  /** A cover image to be displayed next to the opening vignette. */
  coverImageId?: Maybe<Scalars["Int"]>;
};

export type AddCollectionResponse = {
  __typename?: "AddCollectionResponse";
  success: Scalars["Boolean"];
  message: Scalars["String"];
  newCollection?: Maybe<Collection>;
};

export type AddFrameInput = {
  name: Scalars["String"];
  displayName: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  material: Scalars["String"];
  color: Scalars["String"];
  sortIndex: Scalars["Float"];
  printType: Scalars["String"];
  coverImageId?: Maybe<Scalars["Float"]>;
  frameSku: Scalars["String"];
  dimension1: Scalars["Float"];
  dimension2: Scalars["Float"];
  cost: Scalars["Float"];
  shippingCost: Scalars["Float"];
  basePrice: Scalars["Float"];
  priceModifier: Scalars["Float"];
};

export type AddFrameResponse = {
  __typename?: "AddFrameResponse";
  success: Scalars["Boolean"];
  message: Scalars["String"];
  newFrame?: Maybe<Frame>;
};

export type AddImageInput = {
  imageName?: Maybe<Scalars["String"]>;
  fileExtension?: Maybe<Scalars["String"]>;
  imageUrl?: Maybe<Scalars["String"]>;
  altText?: Maybe<Scalars["String"]>;
  size?: Maybe<Scalars["String"]>;
  width?: Maybe<Scalars["Int"]>;
  height?: Maybe<Scalars["Int"]>;
  photoId?: Maybe<Scalars["Float"]>;
};

export type AddImageResponse = {
  __typename?: "AddImageResponse";
  success: Scalars["Boolean"];
  message: Scalars["String"];
  newImage?: Maybe<Image>;
};

/** Inputs to create a new Location entity. */
export type AddLocationInput = {
  /** Name of the location. */
  name: Scalars["String"];
  /** Tag used to ID the location in Photo Info links. */
  tag: Scalars["String"];
  /** Vignette describing the location. */
  description: Scalars["String"];
  /** id for cover image. */
  coverImageId?: Maybe<Scalars["Int"]>;
};

export type AddLocationResponse = {
  __typename?: "AddLocationResponse";
  success: Scalars["Boolean"];
  message: Scalars["String"];
  newLocation?: Maybe<Location>;
};

export type AddMatInput = {
  name: Scalars["String"];
  displayName: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  color: Scalars["String"];
  printType: Scalars["String"];
  coverImageId?: Maybe<Scalars["Float"]>;
  matSku: Scalars["String"];
  dimension1: Scalars["Float"];
  dimension2: Scalars["Float"];
  cost: Scalars["Float"];
  shippingCost: Scalars["Float"];
  basePrice: Scalars["Float"];
  priceModifier: Scalars["Float"];
};

export type AddMatResponse = {
  __typename?: "AddMatResponse";
  success: Scalars["Boolean"];
  message: Scalars["String"];
  newMat?: Maybe<Mat>;
};

export type AddPhotoInput = {
  title?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  isFeatured?: Maybe<Scalars["Boolean"]>;
  isLimitedEdition?: Maybe<Scalars["Boolean"]>;
  rating?: Maybe<Scalars["Int"]>;
  basePrice12?: Maybe<Scalars["Float"]>;
  priceModifier12?: Maybe<Scalars["Float"]>;
  basePrice16?: Maybe<Scalars["Float"]>;
  priceModifier16?: Maybe<Scalars["Float"]>;
  basePrice20?: Maybe<Scalars["Float"]>;
  priceModifier20?: Maybe<Scalars["Float"]>;
  basePrice24?: Maybe<Scalars["Float"]>;
  priceModifier24?: Maybe<Scalars["Float"]>;
  basePrice30?: Maybe<Scalars["Float"]>;
  priceModifier30?: Maybe<Scalars["Float"]>;
  photographerId?: Maybe<Scalars["Int"]>;
  locationId?: Maybe<Scalars["Int"]>;
  subjectIds?: Maybe<Array<Scalars["Int"]>>;
  tagIds?: Maybe<Array<Scalars["Int"]>>;
  collectionIds?: Maybe<Array<Scalars["Int"]>>;
  imageId?: Maybe<Scalars["Int"]>;
  sharingImageId?: Maybe<Scalars["Int"]>;
  emailSharingImageId?: Maybe<Scalars["Int"]>;
};

export type AddPhotoResponse = {
  __typename?: "AddPhotoResponse";
  success: Scalars["Boolean"];
  message: Scalars["String"];
  newPhoto?: Maybe<Photo>;
};

export type AddPhotoToFavoritesResponse = {
  __typename?: "AddPhotoToFavoritesResponse";
  success: Scalars["Boolean"];
  message: Scalars["String"];
  addedPhotoWithId?: Maybe<Scalars["ID"]>;
};

/** Inputs to create a new Photographer entity. */
export type AddPhotographerInput = {
  /** Photographer's full name. */
  name: Scalars["String"];
  /** Photographer's first name. */
  firstName: Scalars["String"];
  /** Photographer's last name. */
  lastName: Scalars["String"];
  /** Photographer's email address. */
  email: Scalars["String"];
  /** Short biography for Photographer. Displayed at the top of the Photographer's photo gallery. */
  bio: Scalars["String"];
  /** id for cover image. */
  coverImageId?: Maybe<Scalars["Int"]>;
};

export type AddPhotographerResponse = {
  __typename?: "AddPhotographerResponse";
  success: Scalars["Boolean"];
  message: Scalars["String"];
  newPhotographer?: Maybe<Photographer>;
};

export type AddPrintInput = {
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  type: Scalars["String"];
  coverImageId?: Maybe<Scalars["Float"]>;
  printSku: Scalars["String"];
  dimension1: Scalars["Float"];
  dimension2: Scalars["Float"];
  cost: Scalars["Float"];
  shippingCost: Scalars["Float"];
  basePrice: Scalars["Float"];
  priceModifier: Scalars["Float"];
};

export type AddPrintResponse = {
  __typename?: "AddPrintResponse";
  success: Scalars["Boolean"];
  message: Scalars["String"];
  newPrint?: Maybe<Print>;
};

export type AddProductInput = {
  photoId: Scalars["Int"];
  printId: Scalars["Int"];
  matId?: Maybe<Scalars["Int"]>;
  frameId?: Maybe<Scalars["Int"]>;
};

export type AddProductResponse = {
  __typename?: "AddProductResponse";
  success: Scalars["Boolean"];
  message: Scalars["String"];
  newProduct?: Maybe<Product>;
};

export type AddProductToShoppingBagResponse = {
  __typename?: "AddProductToShoppingBagResponse";
  success: Scalars["Boolean"];
  message: Scalars["String"];
  addedProduct?: Maybe<Product>;
};

/** Inputs to create a new Subject entity. */
export type AddSubjectInput = {
  /** Name of the subject. Used in Photo Info links. */
  name: Scalars["String"];
  /** A vignette used to introduce the subject. */
  description?: Maybe<Scalars["String"]>;
  /** A cover image to be displayed next to the opening vignette. */
  coverImageId?: Maybe<Scalars["Int"]>;
};

export type AddSubjectResponse = {
  __typename?: "AddSubjectResponse";
  success: Scalars["Boolean"];
  message: Scalars["String"];
  newSubject?: Maybe<Subject>;
};

/** Inputs to create a new Tag entity. */
export type AddTagInput = {
  /** Name of the tag. Used in Photo Info links. */
  name: Scalars["String"];
  /** A vignette used to introduce the tag. */
  description: Scalars["String"];
  /** A cover image to be displayed nest to the opening vignette. */
  coverImageId?: Maybe<Scalars["Int"]>;
};

export type AddTagResponse = {
  __typename?: "AddTagResponse";
  success: Scalars["Boolean"];
  message: Scalars["String"];
  newTag?: Maybe<Tag>;
};

export type Address = {
  __typename?: "Address";
  id: Scalars["ID"];
  line1: Scalars["String"];
  line2: Scalars["String"];
  city: Scalars["String"];
  state: Scalars["String"];
  country: Scalars["String"];
  postalCode: Scalars["String"];
  orders: Array<Order>;
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
};

export type AllFeaturedPhotosResponse = {
  __typename?: "AllFeaturedPhotosResponse";
  total: Scalars["Int"];
  photos: Array<Photo>;
};

export type AllPhotosAtLocationInput = {
  name?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Float"]>;
};

export type AllPhotosAtLocationResponse = {
  __typename?: "AllPhotosAtLocationResponse";
  locationInfo: Location;
  total: Scalars["Int"];
  photos: Array<Photo>;
};

export type AllPhotosByPhotographerInput = {
  id?: Maybe<Scalars["Float"]>;
  name?: Maybe<Scalars["String"]>;
};

export type AllPhotosByPhotographerResponse = {
  __typename?: "AllPhotosByPhotographerResponse";
  photographerInfo: Photographer;
  total: Scalars["Int"];
  photos: Array<Photo>;
};

export type AllPhotosInCollectionInput = {
  name?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Float"]>;
};

export type AllPhotosInCollectionResponse = {
  __typename?: "AllPhotosInCollectionResponse";
  collectionInfo: Collection;
  total: Scalars["Int"];
  photos: Array<Photo>;
};

export type AllPhotosOfSubjectInput = {
  name: Scalars["String"];
};

export type AllPhotosOfSubjectResponse = {
  __typename?: "AllPhotosOfSubjectResponse";
  subjectInfo: Subject;
  total: Scalars["Int"];
  photos: Array<Photo>;
};

export type AllPhotosWithTagInput = {
  id?: Maybe<Scalars["Float"]>;
  name?: Maybe<Scalars["String"]>;
};

export type AllPhotosWithTagResponse = {
  __typename?: "AllPhotosWithTagResponse";
  tagInfo: Tag;
  total: Scalars["Int"];
  photos: Array<Photo>;
};

export type Collection = {
  __typename?: "Collection";
  id: Scalars["ID"];
  name: Scalars["String"];
  tag: Scalars["String"];
  description: Scalars["String"];
  /** Optional. An image of the tag used in connection with the vignetter at the top of the Tag's photos page. */
  coverImage?: Maybe<Image>;
  photosInCollection?: Maybe<Array<PhotoCollection>>;
  /** Count of photos in the collection. */
  countOfPhotos: Scalars["Int"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
};

export type CollectionSelectionOption = {
  __typename?: "CollectionSelectionOption";
  id: Scalars["Int"];
  name: Scalars["String"];
};

export type FavoritesResponse = {
  __typename?: "FavoritesResponse";
  /** Returns list of Photo objects in user's favorites. */
  photoList?: Maybe<Array<Photo>>;
};

export type FinishOptions = {
  __typename?: "FinishOptions";
  prints: Array<Print>;
  mats: Array<Mat>;
  frames: Array<Frame>;
};

export type Frame = {
  __typename?: "Frame";
  id: Scalars["ID"];
  name: Scalars["String"];
  displayName: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  material: Scalars["String"];
  color: Scalars["String"];
  sortIndex: Scalars["Float"];
  printType: Scalars["String"];
  /** Optional. An image of the frame. */
  coverImage?: Maybe<Image>;
  frameSku: Scalars["String"];
  aspectRatio: Scalars["String"];
  dimension1: Scalars["Float"];
  dimension2: Scalars["Float"];
  cost: Scalars["Float"];
  shippingCost: Scalars["Float"];
  basePrice: Scalars["Float"];
  priceModifier: Scalars["Float"];
  retailPrice: Scalars["Float"];
  products?: Maybe<Array<Product>>;
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
};

export type GetApiTokenInput = {
  userId: Scalars["Float"];
  email: Scalars["String"];
};

export type GroupedPhotosAtLocationInput = {
  name?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Float"]>;
};

export type GroupedPhotosAtLocationResponse = {
  __typename?: "GroupedPhotosAtLocationResponse";
  photos: Array<Photo>;
  locationInfo: Location;
};

export type GroupedPhotosByPhotographerInput = {
  id?: Maybe<Scalars["Float"]>;
  name?: Maybe<Scalars["String"]>;
};

export type GroupedPhotosByPhotographerResponse = {
  __typename?: "GroupedPhotosByPhotographerResponse";
  photos: Array<Photo>;
  photographerInfo: Photographer;
};

export type GroupedPhotosOfSubjectInput = {
  id?: Maybe<Scalars["Float"]>;
  name?: Maybe<Scalars["String"]>;
};

export type GroupedPhotosOfSubjectResponse = {
  __typename?: "GroupedPhotosOfSubjectResponse";
  photos: Array<Photo>;
  subjectInfo: Subject;
};

export type GroupedPhotosWithTagInput = {
  id?: Maybe<Scalars["Float"]>;
  name?: Maybe<Scalars["String"]>;
};

export type GroupedPhotosWithTagResponse = {
  __typename?: "GroupedPhotosWithTagResponse";
  photos: Array<Photo>;
  tagInfo: Tag;
};

export type Image = {
  __typename?: "Image";
  id: Scalars["ID"];
  imageName: Scalars["String"];
  fileExtension: Scalars["String"];
  imageUrl: Scalars["String"];
  altText: Scalars["String"];
  aspectRatio?: Maybe<Scalars["String"]>;
  size: Scalars["String"];
  width: Scalars["Int"];
  height: Scalars["Int"];
  isPortrait: Scalars["Boolean"];
  isPanoramic: Scalars["Boolean"];
  photo?: Maybe<Photo>;
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
};

export type ItemCount = {
  __typename?: "ItemCount";
  name?: Maybe<Scalars["String"]>;
  count: Scalars["Int"];
};

export type ItemCountList = {
  __typename?: "ItemCountList";
  itemCountList: Array<ItemCount>;
};

export type Location = {
  __typename?: "Location";
  /** The ID of the location. It is unique, numeric and automatically-generated. */
  id: Scalars["ID"];
  /** The name of the Location. It is required and must be unique. */
  name: Scalars["String"];
  /** A tag for the Location. It is required and must be unique. */
  tag: Scalars["String"];
  /** A description of the location, used as a vignette at the top of the Location's photos page. */
  description: Scalars["String"];
  /** Optional. A map of the location used in conenction with the vignette at the top of the Location's photos page. */
  coverImage?: Maybe<Image>;
  /** Nullable. An array of photos taken at the Location. */
  photos?: Maybe<Array<Photo>>;
  /** Count of photos taken at the location on the site. */
  countOfPhotos: Scalars["Int"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
};

export type LocationSearchSortInput = {
  filter?: Maybe<Scalars["String"]>;
  orderBy?: Maybe<Scalars["String"]>;
  direction?: Maybe<SortDirection>;
};

export type LocationSelectionOption = {
  __typename?: "LocationSelectionOption";
  id: Scalars["Int"];
  name: Scalars["String"];
};

export type LocationsResponse = {
  __typename?: "LocationsResponse";
  locations: Array<Location>;
};

export type Mat = {
  __typename?: "Mat";
  id: Scalars["ID"];
  name: Scalars["String"];
  displayName: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  color: Scalars["String"];
  printType: Scalars["String"];
  /** Optional. An image of the mat. */
  coverImage?: Maybe<Image>;
  matSku: Scalars["String"];
  aspectRatio: Scalars["String"];
  dimension1: Scalars["Float"];
  dimension2: Scalars["Float"];
  cost: Scalars["Float"];
  shippingCost: Scalars["Float"];
  basePrice: Scalars["Float"];
  priceModifier: Scalars["Float"];
  retailPrice: Scalars["Float"];
  products?: Maybe<Array<Product>>;
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
};

export type MatsInput = {
  printType: Scalars["String"];
  dimension1: Scalars["String"];
  dimension2: Scalars["String"];
};

export type MatsResponse = {
  __typename?: "MatsResponse";
  success: Scalars["Boolean"];
  message: Scalars["String"];
  mats?: Maybe<Array<Mat>>;
};

export type Mutation = {
  __typename?: "Mutation";
  addCollection: AddCollectionResponse;
  updateCollection: UpdateCollectionResponse;
  deleteCollection: Scalars["Boolean"];
  addFrame: AddFrameResponse;
  updateFrame: UpdateFrameResponse;
  deleteFrame: Scalars["Boolean"];
  addImage: AddImageResponse;
  updateImage: UpdateImageResponse;
  deleteImage: Scalars["Boolean"];
  addImageToPhoto: Image;
  addLocation: AddLocationResponse;
  updateLocation: UpdateLocationResponse;
  deleteLocation: Scalars["Boolean"];
  addMat: AddMatResponse;
  updateMat: UpdateMatResponse;
  deleteMat: Scalars["Boolean"];
  addPhotoToCollection: Scalars["Boolean"];
  removePhotoFromCollection: Scalars["Boolean"];
  addPhotographer: AddPhotographerResponse;
  updatePhotographer: UpdatePhotographerResponse;
  deletePhotographer: Scalars["Boolean"];
  addPhoto: AddPhotoResponse;
  updatePhoto: UpdatePhotoResponse;
  deletePhoto: Scalars["Boolean"];
  addPrint: AddPrintResponse;
  updatePrint: UpdatePrintResponse;
  deletePrint: Scalars["Boolean"];
  addProduct: AddProductResponse;
  updateProduct: UpdateProductResponse;
  deleteProduct: SuccessMessageResponse;
  addSubject: AddSubjectResponse;
  updateSubject: UpdateSubjectResponse;
  deleteSubject: Scalars["Boolean"];
  subscribeToNewsletter: SuccessMessageResponse;
  unsubscribeFromNewsletter: SuccessMessageResponse;
  addTag: AddTagResponse;
  updateTag: UpdateTagResponse;
  deleteTag: Scalars["Boolean"];
  addPhotoToFavorites: AddPhotoToFavoritesResponse;
  removePhotoFromFavorites: RemovePhotoFromFavoritesResponse;
  addProductToShoppingBag: AddProductToShoppingBagResponse;
  removeProductFromShoppingBag: SuccessMessageResponse;
  getApiToken: Scalars["String"];
};

export type MutationAddCollectionArgs = {
  input: AddCollectionInput;
};

export type MutationUpdateCollectionArgs = {
  input: UpdateCollectionInput;
  id: Scalars["Int"];
};

export type MutationDeleteCollectionArgs = {
  id: Scalars["Int"];
};

export type MutationAddFrameArgs = {
  input: AddFrameInput;
};

export type MutationUpdateFrameArgs = {
  input: UpdateFrameInput;
  id: Scalars["Int"];
};

export type MutationDeleteFrameArgs = {
  id: Scalars["Int"];
};

export type MutationAddImageArgs = {
  input: AddImageInput;
};

export type MutationUpdateImageArgs = {
  input: UpdateImageInput;
  id: Scalars["Int"];
};

export type MutationDeleteImageArgs = {
  id: Scalars["Int"];
};

export type MutationAddImageToPhotoArgs = {
  imageId: Scalars["Int"];
  photoId: Scalars["Int"];
};

export type MutationAddLocationArgs = {
  input: AddLocationInput;
};

export type MutationUpdateLocationArgs = {
  input: UpdateLocationInput;
  id: Scalars["Int"];
};

export type MutationDeleteLocationArgs = {
  id: Scalars["Int"];
};

export type MutationAddMatArgs = {
  input: AddMatInput;
};

export type MutationUpdateMatArgs = {
  input: UpdateMatInput;
  id: Scalars["Int"];
};

export type MutationDeleteMatArgs = {
  id: Scalars["Int"];
};

export type MutationAddPhotoToCollectionArgs = {
  input: PhotoCollectionInput;
};

export type MutationRemovePhotoFromCollectionArgs = {
  input: PhotoCollectionInput;
};

export type MutationAddPhotographerArgs = {
  input: AddPhotographerInput;
};

export type MutationUpdatePhotographerArgs = {
  input: UpdatePhotographerInput;
  id: Scalars["Int"];
};

export type MutationDeletePhotographerArgs = {
  id: Scalars["Int"];
};

export type MutationAddPhotoArgs = {
  input: AddPhotoInput;
};

export type MutationUpdatePhotoArgs = {
  input: UpdatePhotoInput;
  id: Scalars["Int"];
};

export type MutationDeletePhotoArgs = {
  id: Scalars["Int"];
};

export type MutationAddPrintArgs = {
  input: AddPrintInput;
};

export type MutationUpdatePrintArgs = {
  input: UpdatePrintInput;
  id: Scalars["Int"];
};

export type MutationDeletePrintArgs = {
  id: Scalars["Int"];
};

export type MutationAddProductArgs = {
  input: AddProductInput;
};

export type MutationUpdateProductArgs = {
  input: UpdateProductInput;
  id: Scalars["Int"];
};

export type MutationDeleteProductArgs = {
  id: Scalars["Int"];
};

export type MutationAddSubjectArgs = {
  input: AddSubjectInput;
};

export type MutationUpdateSubjectArgs = {
  input: UpdateSubjectInput;
  id: Scalars["Int"];
};

export type MutationDeleteSubjectArgs = {
  id: Scalars["Int"];
};

export type MutationAddTagArgs = {
  input: AddTagInput;
};

export type MutationUpdateTagArgs = {
  input: UpdateTagInput;
  id: Scalars["Int"];
};

export type MutationDeleteTagArgs = {
  id: Scalars["Int"];
};

export type MutationAddPhotoToFavoritesArgs = {
  photoId: Scalars["Float"];
};

export type MutationRemovePhotoFromFavoritesArgs = {
  photoId: Scalars["Float"];
};

export type MutationAddProductToShoppingBagArgs = {
  productId: Scalars["Float"];
};

export type MutationRemoveProductFromShoppingBagArgs = {
  productId: Scalars["Float"];
};

export type MutationGetApiTokenArgs = {
  input: GetApiTokenInput;
};

export type Order = {
  __typename?: "Order";
  id: Scalars["ID"];
  orderStatus: OrderStatus;
  products: Array<Product>;
  shipToAddress: Address;
  user: User;
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
};

/** Order status */
export enum OrderStatus {
  Paid = "PAID",
  Placed = "PLACED",
  Shipped = "SHIPPED",
  Fulfilled = "FULFILLED",
  Problem = "PROBLEM"
}

export type PaginatedAllPhotosResponse = {
  __typename?: "PaginatedAllPhotosResponse";
  photos: Array<Photo>;
  pageInfo: PaginatedResponse;
};

export type PaginatedFeaturedPhotosResponse = {
  __typename?: "PaginatedFeaturedPhotosResponse";
  photos: Array<Photo>;
  pageInfo: PaginatedResponse;
};

export type PaginatedPhotosAtLocationInput = {
  name?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Float"]>;
  cursor?: Maybe<Scalars["Int"]>;
  take: Scalars["Int"];
};

export type PaginatedPhotosAtLocationResponse = {
  __typename?: "PaginatedPhotosAtLocationResponse";
  photos: Array<Photo>;
  pageInfo: PaginatedResponse;
  locationInfo: Location;
};

export type PaginatedPhotosByPhotographerInput = {
  id?: Maybe<Scalars["Float"]>;
  name?: Maybe<Scalars["String"]>;
  cursor?: Maybe<Scalars["Int"]>;
  take: Scalars["Int"];
};

export type PaginatedPhotosByPhotographerResponse = {
  __typename?: "PaginatedPhotosByPhotographerResponse";
  photos: Array<Photo>;
  pageInfo: PaginatedResponse;
  photographerInfo: Photographer;
};

export type PaginatedPhotosInput = {
  cursor?: Maybe<Scalars["Int"]>;
  take: Scalars["Int"];
};

export type PaginatedPhotosOfSubjectInput = {
  name?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Float"]>;
  cursor?: Maybe<Scalars["Int"]>;
  take: Scalars["Int"];
};

export type PaginatedPhotosOfSubjectResponse = {
  __typename?: "PaginatedPhotosOfSubjectResponse";
  photos: Array<Photo>;
  pageInfo: PaginatedResponse;
  subjectInfo: Subject;
};

export type PaginatedPhotosWithTagInput = {
  name?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Float"]>;
  cursor?: Maybe<Scalars["Int"]>;
  take: Scalars["Int"];
};

export type PaginatedPhotosWithTagResponse = {
  __typename?: "PaginatedPhotosWithTagResponse";
  photos: Array<Photo>;
  pageInfo: PaginatedResponse;
  tagInfo: Tag;
};

export type PaginatedResponse = {
  __typename?: "PaginatedResponse";
  startCursor: Scalars["Int"];
  endCursor: Scalars["Int"];
  total: Scalars["Int"];
};

export type Photo = {
  __typename?: "Photo";
  id: Scalars["ID"];
  skuGenerator: Scalars["Int"];
  sku: Scalars["Int"];
  sortIndex: Scalars["Int"];
  title: Scalars["String"];
  description: Scalars["String"];
  isFeatured: Scalars["Boolean"];
  isLimitedEdition: Scalars["Boolean"];
  isHidden: Scalars["Boolean"];
  rating: Scalars["Int"];
  printTypes: Array<Scalars["String"]>;
  basePrice12: Scalars["Float"];
  priceModifier12: Scalars["Float"];
  retailPrice12: Scalars["Float"];
  basePrice16: Scalars["Float"];
  priceModifier16: Scalars["Float"];
  retailPrice16: Scalars["Float"];
  basePrice20: Scalars["Float"];
  priceModifier20: Scalars["Float"];
  retailPrice20: Scalars["Float"];
  basePrice24: Scalars["Float"];
  priceModifier24: Scalars["Float"];
  retailPrice24: Scalars["Float"];
  basePrice30: Scalars["Float"];
  priceModifier30: Scalars["Float"];
  retailPrice30: Scalars["Float"];
  photographer?: Maybe<Photographer>;
  location?: Maybe<Location>;
  images: Array<Image>;
  /** A 1,200px x 630px image for sharing. */
  sharingImage?: Maybe<Image>;
  /** A jpg image for sharing. */
  emailSharingImage?: Maybe<Image>;
  subjectsInPhoto?: Maybe<Array<PhotoSubject>>;
  tagsForPhoto?: Maybe<Array<PhotoTag>>;
  collectionsForPhoto?: Maybe<Array<PhotoCollection>>;
  favoritedByUsers?: Maybe<Array<UserFavorite>>;
  products?: Maybe<Array<Product>>;
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
};

export type PhotoCollection = {
  __typename?: "PhotoCollection";
  collectionId: Collection;
  collection: Collection;
  photoId: Photo;
  photo: Photo;
};

export type PhotoCollectionInput = {
  photoId: Scalars["Int"];
  collectionId: Scalars["Int"];
};

export type PhotoEditSelectionOptions = {
  __typename?: "PhotoEditSelectionOptions";
  photographers: Array<PhotographerSelectionOption>;
  locations: Array<LocationSelectionOption>;
  subjects: Array<SubjectSelectionOption>;
  tags: Array<TagSelectionOption>;
  collections: Array<CollectionSelectionOption>;
};

export type PhotoSearchSortInput = {
  filter?: Maybe<Scalars["String"]>;
  orderBy?: Maybe<Scalars["String"]>;
  direction?: Maybe<SortDirection>;
};

export type PhotoSubject = {
  __typename?: "PhotoSubject";
  subjectId: Subject;
  subject: Subject;
  photoId: Photo;
  photo: Photo;
};

export type PhotoTag = {
  __typename?: "PhotoTag";
  tagId: Tag;
  tag: Tag;
  photoId: Photo;
  photo: Photo;
};

export type PhotoWithFinishOptionsResponse = {
  __typename?: "PhotoWithFinishOptionsResponse";
  success: Scalars["Boolean"];
  message: Scalars["String"];
  photo?: Maybe<Photo>;
  prints?: Maybe<Array<Print>>;
  mats?: Maybe<Array<Mat>>;
  frames?: Maybe<Array<Frame>>;
};

export type Photographer = {
  __typename?: "Photographer";
  id: Scalars["ID"];
  /** The artist's full name */
  name: Scalars["String"];
  /** The artist's first name. */
  firstName: Scalars["String"];
  /** The artist's last name. */
  lastName: Scalars["String"];
  /** The artist's email address. */
  email: Scalars["String"];
  /** The Image for the artist's portrait. */
  coverImage?: Maybe<Image>;
  /** The artist's biography. */
  bio: Scalars["String"];
  /** Photos attributed to the artist. */
  photos?: Maybe<Array<Photo>>;
  /** Count of photos attributed to the photographer on the site. */
  countOfPhotos: Scalars["Int"];
  /** Date record was created. */
  createdAt: Scalars["DateTime"];
  /** Date record was most recently updated. */
  updatedAt: Scalars["DateTime"];
};

export type PhotographerSelectionOption = {
  __typename?: "PhotographerSelectionOption";
  id: Scalars["Int"];
  name: Scalars["String"];
};

export type PhotographersResponse = {
  __typename?: "PhotographersResponse";
  photographers: Array<Photographer>;
};

export type PhotosResponse = {
  __typename?: "PhotosResponse";
  photos: Array<Photo>;
};

export type Print = {
  __typename?: "Print";
  id: Scalars["ID"];
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  type: Scalars["String"];
  /** Optional. An image of the print. */
  coverImage?: Maybe<Image>;
  printSku: Scalars["String"];
  aspectRatio: Scalars["String"];
  dimension1: Scalars["Float"];
  dimension2: Scalars["Float"];
  cost: Scalars["Float"];
  shippingCost: Scalars["Float"];
  basePrice: Scalars["Float"];
  priceModifier: Scalars["Float"];
  retailPrice: Scalars["Float"];
  products?: Maybe<Array<Product>>;
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
};

export type PrintsInput = {
  type: Scalars["String"];
  aspectRatio: Scalars["String"];
};

export type PrintsResponse = {
  __typename?: "PrintsResponse";
  success: Scalars["Boolean"];
  message: Scalars["String"];
  prints?: Maybe<Array<Print>>;
};

export type Product = {
  __typename?: "Product";
  id: Scalars["ID"];
  photo: Photo;
  print: Print;
  mat?: Maybe<Mat>;
  frame?: Maybe<Frame>;
  shoppingBag?: Maybe<User>;
  order: Order;
  totalRetailPrice: Scalars["Float"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  productSummary: Scalars["String"];
};

export type Query = {
  __typename?: "Query";
  /** Search collections. Returns Collection + Cover Image. */
  searchCollections: SearchCollectionsResponse;
  collectionsWithPhotos: Array<Collection>;
  collection: Collection;
  collectionWithPhotos: Collection;
  allPhotosInCollection: AllPhotosInCollectionResponse;
  /** Search Frames. Returns Frame + Cover Image. */
  searchFrames: SearchFramesResponse;
  framesWithAspectRatio: Array<Frame>;
  frame: Frame;
  images: Array<Image>;
  image: Image;
  searchImages: SearchImagesResponse;
  /** Returns all Locations + cover images. Sortable and filterable. */
  locations: LocationsResponse;
  /** Search locations. Returns Location + Cover Image. */
  searchLocations: SearchLocationsResponse;
  /** Returns one Location + portrait, only or null, if no matching id is found. Meant to be used on the backend. */
  location?: Maybe<Location>;
  /** Returns one Location + portrait, only or null, if no matching name is found. */
  locationWithName?: Maybe<Location>;
  groupedPhotosAtLocation: GroupedPhotosAtLocationResponse;
  paginatedPhotosAtLocation: PaginatedPhotosAtLocationResponse;
  allPhotosAtLocation: AllPhotosAtLocationResponse;
  /** Search Mats. Returns Mat + Cover Image. */
  searchMats: SearchMatsResponse;
  matsWithAspectRatio: Array<Mat>;
  matsWithAspectRatioAndSize: Array<Mat>;
  mat: Mat;
  photoCountBySubject: ItemCountList;
  photoCountByTag: ItemCountList;
  photoCountByCollection: ItemCountList;
  photoCountByLocation: ItemCountList;
  photoCountByPhotographer: ItemCountList;
  printsOfTypeAndAspectRatio: PrintsResponse;
  matsOfTypeAndSize: MatsResponse;
  finishOptions: FinishOptions;
  photoAndFinishOptionsForSku: PhotoWithFinishOptionsResponse;
  /** Returns all Photographers + portraits, only. Meant to be used on the backend. */
  searchPhotographers: SearchPhotographersResponse;
  /** Returns all Photographers + portraits, only. Meant to be used on the backend. */
  sortedPhotographers: PhotographersResponse;
  /** Returns one Photographer + portrait, only or null, if no matching id is found. Meant to be used on the backend. */
  photographer?: Maybe<Photographer>;
  /** Returns one Photographer + portrait AND Photographer's Photos and related data. Meant to be used on the frontend. Used for the Photographer's Gallery. */
  photographerWithName?: Maybe<Photographer>;
  groupedPhotosByPhotographer: GroupedPhotosByPhotographerResponse;
  paginatedPhotosByPhotographer: PaginatedPhotosByPhotographerResponse;
  allPhotosByPhotographer: AllPhotosByPhotographerResponse;
  /** Returns all Photos + all relations. Sortable and filterable. */
  photos: PhotosResponse;
  /** Returns all Photos + all relations. Searchable. */
  searchPhotos: SearchPhotosResponse;
  paginatedPhotos: PaginatedAllPhotosResponse;
  paginatedFeaturedPhotos: PaginatedFeaturedPhotosResponse;
  allFeaturedPhotos: AllFeaturedPhotosResponse;
  photo?: Maybe<Photo>;
  photoWithSku: Photo;
  photoEditOptions: PhotoEditSelectionOptions;
  /** Search Prints. Returns Print + Cover Image. */
  searchPrints: SearchPrintsResponse;
  print: Print;
  product?: Maybe<Product>;
  userSearch: Array<UserSearchResult>;
  /** Returns all Subjects + cover images. Sortable and filterable. */
  subjects: SubjectsResponse;
  /** Search subjects. Returns Subjects + Cover Image. */
  searchSubjects: SearchSubjectsResponse;
  subject?: Maybe<Subject>;
  subjectWithName?: Maybe<Subject>;
  groupedPhotosOfSubject: GroupedPhotosOfSubjectResponse;
  paginatedPhotosOfSubject: PaginatedPhotosOfSubjectResponse;
  allPhotosOfSubject: AllPhotosOfSubjectResponse;
  /** Search tags. Returns tag + Cover Image. */
  searchTags: SearchTagsResponse;
  tag: Tag;
  tagWithName?: Maybe<Tag>;
  groupedPhotosWithTag: GroupedPhotosWithTagResponse;
  paginatedPhotosWithTag: PaginatedPhotosWithTagResponse;
  allPhotosWithTag: AllPhotosWithTagResponse;
  /** Returns all Photos favorited by the signed in User. */
  favorites: FavoritesResponse;
  shoppingBagItems: ShoppingBagItemsResponse;
  users: Array<User>;
  user: User;
  userSummaries: Array<User>;
  newsletterSubscribers: Array<User>;
  me: Scalars["Int"];
  getUserPreferences: UserPreferencesResponse;
};

export type QuerySearchCollectionsArgs = {
  input: SearchCollectionsInput;
};

export type QueryCollectionArgs = {
  id: Scalars["Int"];
};

export type QueryCollectionWithPhotosArgs = {
  id: Scalars["Int"];
};

export type QueryAllPhotosInCollectionArgs = {
  input: AllPhotosInCollectionInput;
};

export type QuerySearchFramesArgs = {
  input: SearchFramesInput;
};

export type QueryFramesWithAspectRatioArgs = {
  aspectRatio: Scalars["String"];
};

export type QueryFrameArgs = {
  id: Scalars["Int"];
};

export type QueryImageArgs = {
  id: Scalars["Int"];
};

export type QuerySearchImagesArgs = {
  input: SearchImagesInput;
};

export type QueryLocationsArgs = {
  input: LocationSearchSortInput;
};

export type QuerySearchLocationsArgs = {
  input: SearchLocationsInput;
};

export type QueryLocationArgs = {
  id: Scalars["Int"];
};

export type QueryLocationWithNameArgs = {
  name: Scalars["String"];
};

export type QueryGroupedPhotosAtLocationArgs = {
  input: GroupedPhotosAtLocationInput;
};

export type QueryPaginatedPhotosAtLocationArgs = {
  input: PaginatedPhotosAtLocationInput;
};

export type QueryAllPhotosAtLocationArgs = {
  input: AllPhotosAtLocationInput;
};

export type QuerySearchMatsArgs = {
  input: SearchMatsInput;
};

export type QueryMatsWithAspectRatioArgs = {
  aspectRatio: Scalars["String"];
};

export type QueryMatsWithAspectRatioAndSizeArgs = {
  size: Scalars["Int"];
  aspectRatio: Scalars["String"];
};

export type QueryMatArgs = {
  id: Scalars["Int"];
};

export type QueryPrintsOfTypeAndAspectRatioArgs = {
  input: PrintsInput;
};

export type QueryMatsOfTypeAndSizeArgs = {
  input: MatsInput;
};

export type QueryFinishOptionsArgs = {
  aspectRatio: Scalars["String"];
};

export type QueryPhotoAndFinishOptionsForSkuArgs = {
  sku: Scalars["Int"];
};

export type QuerySearchPhotographersArgs = {
  input: SearchPhotographersInput;
};

export type QuerySortedPhotographersArgs = {
  asc: Scalars["Boolean"];
  orderBy: Scalars["String"];
  filter: Scalars["String"];
};

export type QueryPhotographerArgs = {
  id: Scalars["Int"];
};

export type QueryPhotographerWithNameArgs = {
  name: Scalars["String"];
};

export type QueryGroupedPhotosByPhotographerArgs = {
  input: GroupedPhotosByPhotographerInput;
};

export type QueryPaginatedPhotosByPhotographerArgs = {
  input: PaginatedPhotosByPhotographerInput;
};

export type QueryAllPhotosByPhotographerArgs = {
  input: AllPhotosByPhotographerInput;
};

export type QueryPhotosArgs = {
  input: PhotoSearchSortInput;
};

export type QuerySearchPhotosArgs = {
  input: SearchPhotosInput;
};

export type QueryPaginatedPhotosArgs = {
  input: PaginatedPhotosInput;
};

export type QueryPaginatedFeaturedPhotosArgs = {
  input: PaginatedPhotosInput;
};

export type QueryPhotoArgs = {
  id: Scalars["Int"];
};

export type QueryPhotoWithSkuArgs = {
  sku: Scalars["Int"];
};

export type QuerySearchPrintsArgs = {
  input: SearchPrintsInput;
};

export type QueryPrintArgs = {
  id: Scalars["Int"];
};

export type QueryProductArgs = {
  id: Scalars["Int"];
};

export type QueryUserSearchArgs = {
  phrase: Scalars["String"];
};

export type QuerySubjectsArgs = {
  input: SubjectSearchSortInput;
};

export type QuerySearchSubjectsArgs = {
  input: SearchSubjectsInput;
};

export type QuerySubjectArgs = {
  id: Scalars["Int"];
};

export type QuerySubjectWithNameArgs = {
  name: Scalars["String"];
};

export type QueryGroupedPhotosOfSubjectArgs = {
  input: GroupedPhotosOfSubjectInput;
};

export type QueryPaginatedPhotosOfSubjectArgs = {
  input: PaginatedPhotosOfSubjectInput;
};

export type QueryAllPhotosOfSubjectArgs = {
  input: AllPhotosOfSubjectInput;
};

export type QuerySearchTagsArgs = {
  input: SearchTagsInput;
};

export type QueryTagArgs = {
  id: Scalars["Int"];
};

export type QueryTagWithNameArgs = {
  name: Scalars["String"];
};

export type QueryGroupedPhotosWithTagArgs = {
  input: GroupedPhotosWithTagInput;
};

export type QueryPaginatedPhotosWithTagArgs = {
  input: PaginatedPhotosWithTagInput;
};

export type QueryAllPhotosWithTagArgs = {
  input: AllPhotosWithTagInput;
};

export type QueryUserArgs = {
  id: Scalars["Int"];
};

export type RemovePhotoFromFavoritesResponse = {
  __typename?: "RemovePhotoFromFavoritesResponse";
  success: Scalars["Boolean"];
  message: Scalars["String"];
  removedPhotoWithId?: Maybe<Scalars["ID"]>;
};

export type SearchCollectionsInput = {
  searchString: Scalars["String"];
};

export type SearchCollectionsResponse = {
  __typename?: "SearchCollectionsResponse";
  datalist: Array<Collection>;
};

export type SearchFramesInput = {
  searchString: Scalars["String"];
};

export type SearchFramesResponse = {
  __typename?: "SearchFramesResponse";
  datalist: Array<Frame>;
};

export type SearchImagesInput = {
  searchString: Scalars["String"];
};

export type SearchImagesResponse = {
  __typename?: "SearchImagesResponse";
  datalist: Array<Image>;
};

export type SearchLocationsInput = {
  searchString: Scalars["String"];
};

export type SearchLocationsResponse = {
  __typename?: "SearchLocationsResponse";
  datalist: Array<Location>;
};

export type SearchMatsInput = {
  searchString: Scalars["String"];
};

export type SearchMatsResponse = {
  __typename?: "SearchMatsResponse";
  datalist: Array<Mat>;
};

export type SearchPhotographersInput = {
  searchString: Scalars["String"];
};

export type SearchPhotographersResponse = {
  __typename?: "SearchPhotographersResponse";
  datalist: Array<Photographer>;
};

export type SearchPhotosInput = {
  searchString: Scalars["String"];
};

export type SearchPhotosResponse = {
  __typename?: "SearchPhotosResponse";
  datalist: Array<Photo>;
};

export type SearchPrintsInput = {
  searchString: Scalars["String"];
};

export type SearchPrintsResponse = {
  __typename?: "SearchPrintsResponse";
  datalist: Array<Print>;
};

export type SearchSubjectsInput = {
  searchString: Scalars["String"];
};

export type SearchSubjectsResponse = {
  __typename?: "SearchSubjectsResponse";
  datalist: Array<Subject>;
};

export type SearchTagsInput = {
  searchString: Scalars["String"];
};

export type SearchTagsResponse = {
  __typename?: "SearchTagsResponse";
  datalist: Array<Tag>;
};

export type SelectionOption = {
  __typename?: "SelectionOption";
  id: Scalars["Int"];
  name: Scalars["String"];
};

export type ShoppingBagItemsResponse = {
  __typename?: "ShoppingBagItemsResponse";
  /** Returns list of Products in user's shopping bag. */
  dataList?: Maybe<Array<Product>>;
};

/** Sort direction */
export enum SortDirection {
  Asc = "ASC",
  Desc = "DESC"
}

export type Subject = {
  __typename?: "Subject";
  id: Scalars["ID"];
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  /** Optional. An image of the subject used in connection with the vignette at the top of the Subject's photos page. */
  coverImage?: Maybe<Image>;
  photosOfSubject?: Maybe<Array<PhotoSubject>>;
  /** Count of photos of the subject on the site. */
  countOfPhotos: Scalars["Int"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
};

export type SubjectSearchSortInput = {
  filter?: Maybe<Scalars["String"]>;
  orderBy?: Maybe<Scalars["String"]>;
  direction?: Maybe<SortDirection>;
};

export type SubjectSelectionOption = {
  __typename?: "SubjectSelectionOption";
  id: Scalars["Int"];
  name: Scalars["String"];
};

export type SubjectsResponse = {
  __typename?: "SubjectsResponse";
  subjects: Array<Subject>;
};

export type SuccessMessageResponse = {
  __typename?: "SuccessMessageResponse";
  success: Scalars["Boolean"];
  message: Scalars["String"];
};

export type Tag = {
  __typename?: "Tag";
  id: Scalars["ID"];
  /** The name of the tag. */
  name: Scalars["String"];
  /** Optional. A description of the tag used in connection with the vignette at the top of the Tag's photo page. */
  description: Scalars["String"];
  /** Optional. An image of the tag used in connection with the vignette at the top of the Tag's photos page. */
  coverImage?: Maybe<Image>;
  /** A connection through a join table to the photos tagged with the tag. */
  photosWithTag?: Maybe<Array<PhotoTag>>;
  /** Count of photos of the tag on the site. */
  countOfPhotos: Scalars["Int"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
};

export type TagSelectionOption = {
  __typename?: "TagSelectionOption";
  id: Scalars["Int"];
  name: Scalars["String"];
};

/** Optional inputs to be used to update the Collection Info. */
export type UpdateCollectionInput = {
  /** Optional. Name of the collection. Used in Photo Info links. */
  name?: Maybe<Scalars["String"]>;
  /** An optional tag for the collection. */
  tag?: Maybe<Scalars["String"]>;
  /** Optional. A vignette used to introduce the subject. */
  description?: Maybe<Scalars["String"]>;
  /** Optional. A cover image to be displayed next to the opening vignette. */
  coverImageId?: Maybe<Scalars["Float"]>;
};

export type UpdateCollectionResponse = {
  __typename?: "UpdateCollectionResponse";
  success: Scalars["Boolean"];
  message: Scalars["String"];
  updatedCollection?: Maybe<Collection>;
};

export type UpdateFrameInput = {
  name?: Maybe<Scalars["String"]>;
  displayName?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  material?: Maybe<Scalars["String"]>;
  color?: Maybe<Scalars["String"]>;
  printType?: Maybe<Scalars["String"]>;
  sortIndex?: Maybe<Scalars["Float"]>;
  coverImageId?: Maybe<Scalars["Float"]>;
  frameSku?: Maybe<Scalars["String"]>;
  dimension1?: Maybe<Scalars["Float"]>;
  dimension2?: Maybe<Scalars["Float"]>;
  cost?: Maybe<Scalars["Float"]>;
  shippingCost?: Maybe<Scalars["Float"]>;
  basePrice?: Maybe<Scalars["Float"]>;
  priceModifier?: Maybe<Scalars["Float"]>;
};

export type UpdateFrameResponse = {
  __typename?: "UpdateFrameResponse";
  success: Scalars["Boolean"];
  message: Scalars["String"];
  updatedFrame?: Maybe<Frame>;
};

export type UpdateImageInput = {
  imageName?: Maybe<Scalars["String"]>;
  fileExtension?: Maybe<Scalars["String"]>;
  imageUrl?: Maybe<Scalars["String"]>;
  altText?: Maybe<Scalars["String"]>;
  size?: Maybe<Scalars["String"]>;
  width?: Maybe<Scalars["Int"]>;
  height?: Maybe<Scalars["Int"]>;
  photoId?: Maybe<Scalars["Float"]>;
};

export type UpdateImageResponse = {
  __typename?: "UpdateImageResponse";
  success: Scalars["Boolean"];
  message: Scalars["String"];
  updatedImage?: Maybe<Image>;
};

/** Optional inputs to be used to update the Location Info. */
export type UpdateLocationInput = {
  /** Optional. Name of the Location. */
  name?: Maybe<Scalars["String"]>;
  /** Optional. Tag used to identify the Location. */
  tag?: Maybe<Scalars["String"]>;
  /** Vignette describing the location. */
  description?: Maybe<Scalars["String"]>;
  /** Map of the location. Used at the top of the Location's Photo Gallery. Used to look up the Map and add it to the One-to-One relationship. */
  coverImageId?: Maybe<Scalars["Float"]>;
};

export type UpdateLocationResponse = {
  __typename?: "UpdateLocationResponse";
  success: Scalars["Boolean"];
  message: Scalars["String"];
  updatedLocation?: Maybe<Location>;
};

export type UpdateMatInput = {
  name?: Maybe<Scalars["String"]>;
  displayName?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  color?: Maybe<Scalars["String"]>;
  printType?: Maybe<Scalars["String"]>;
  coverImageId?: Maybe<Scalars["Float"]>;
  matSku?: Maybe<Scalars["String"]>;
  dimension1?: Maybe<Scalars["Float"]>;
  dimension2?: Maybe<Scalars["Float"]>;
  cost?: Maybe<Scalars["Float"]>;
  shippingCost?: Maybe<Scalars["Float"]>;
  basePrice?: Maybe<Scalars["Float"]>;
  priceModifier?: Maybe<Scalars["Float"]>;
};

export type UpdateMatResponse = {
  __typename?: "UpdateMatResponse";
  success: Scalars["Boolean"];
  message: Scalars["String"];
  updatedMat?: Maybe<Mat>;
};

export type UpdatePhotoInput = {
  title?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  isHidden?: Maybe<Scalars["Boolean"]>;
  isFeatured?: Maybe<Scalars["Boolean"]>;
  isLimitedEdition?: Maybe<Scalars["Boolean"]>;
  rating?: Maybe<Scalars["Int"]>;
  basePrice12?: Maybe<Scalars["Float"]>;
  priceModifier12?: Maybe<Scalars["Float"]>;
  basePrice16?: Maybe<Scalars["Float"]>;
  priceModifier16?: Maybe<Scalars["Float"]>;
  basePrice20?: Maybe<Scalars["Float"]>;
  priceModifier20?: Maybe<Scalars["Float"]>;
  basePrice24?: Maybe<Scalars["Float"]>;
  priceModifier24?: Maybe<Scalars["Float"]>;
  basePrice30?: Maybe<Scalars["Float"]>;
  priceModifier30?: Maybe<Scalars["Float"]>;
  imageId?: Maybe<Scalars["Int"]>;
  sharingImageId?: Maybe<Scalars["Int"]>;
  emailSharingImageId?: Maybe<Scalars["Int"]>;
  photographerId?: Maybe<Scalars["Int"]>;
  locationId?: Maybe<Scalars["Int"]>;
  subjectIds?: Maybe<Array<Scalars["Int"]>>;
  tagIds?: Maybe<Array<Scalars["Int"]>>;
  collectionIds?: Maybe<Array<Scalars["Int"]>>;
};

export type UpdatePhotoResponse = {
  __typename?: "UpdatePhotoResponse";
  success: Scalars["Boolean"];
  message: Scalars["String"];
  updatedPhoto?: Maybe<Photo>;
};

/** Inputs to update a Photographer entity. */
export type UpdatePhotographerInput = {
  /** Optional: Photographer's full name. */
  name?: Maybe<Scalars["String"]>;
  /** Optional: Photographer's first name. */
  firstName?: Maybe<Scalars["String"]>;
  /** Optional: Photographer's last name. */
  lastName?: Maybe<Scalars["String"]>;
  /** Optional: Photographer's email address. */
  email?: Maybe<Scalars["String"]>;
  /** Optional: Short biography for Photographer. Displayed at the top of the Photographer's photo gallery. */
  bio?: Maybe<Scalars["String"]>;
  /** id for cover image. */
  coverImageId?: Maybe<Scalars["Int"]>;
};

export type UpdatePhotographerResponse = {
  __typename?: "UpdatePhotographerResponse";
  success: Scalars["Boolean"];
  message: Scalars["String"];
  updatedPhotographer?: Maybe<Photographer>;
};

export type UpdatePrintInput = {
  name?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  coverImageId?: Maybe<Scalars["Float"]>;
  printSku?: Maybe<Scalars["String"]>;
  dimension1?: Maybe<Scalars["Float"]>;
  dimension2?: Maybe<Scalars["Float"]>;
  cost?: Maybe<Scalars["Float"]>;
  shippingCost?: Maybe<Scalars["Float"]>;
  basePrice?: Maybe<Scalars["Float"]>;
  priceModifier?: Maybe<Scalars["Float"]>;
};

export type UpdatePrintResponse = {
  __typename?: "UpdatePrintResponse";
  success: Scalars["Boolean"];
  message: Scalars["String"];
  updatedPrint?: Maybe<Print>;
};

export type UpdateProductInput = {
  photoId?: Maybe<Scalars["Int"]>;
  printId?: Maybe<Scalars["Int"]>;
  matId?: Maybe<Scalars["Int"]>;
  frameId?: Maybe<Scalars["Int"]>;
};

export type UpdateProductResponse = {
  __typename?: "UpdateProductResponse";
  success: Scalars["Boolean"];
  message: Scalars["String"];
  updatedProduct?: Maybe<Product>;
};

/** Optional inputs to be used to update the Subject Info. */
export type UpdateSubjectInput = {
  /** Optional. Name of the subject. Used in Photo Info links. */
  name?: Maybe<Scalars["String"]>;
  /** Optional. A vignette used to introduce the subject. */
  description?: Maybe<Scalars["String"]>;
  /** Optional. A cover image to be displayed next to the opening vignette. */
  coverImageId?: Maybe<Scalars["Float"]>;
};

export type UpdateSubjectResponse = {
  __typename?: "UpdateSubjectResponse";
  success: Scalars["Boolean"];
  message: Scalars["String"];
  updatedSubject?: Maybe<Subject>;
};

/** Optional inputs to be used to update the Tag Info. */
export type UpdateTagInput = {
  /** Optional. Name of the tag. Used in Photo Info links. */
  name?: Maybe<Scalars["String"]>;
  /** Optional. A vignette used to introduce the subject. */
  description?: Maybe<Scalars["String"]>;
  /** Optional. A cover image to be displayed next to the opening vignette. */
  coverImageId?: Maybe<Scalars["Float"]>;
};

export type UpdateTagResponse = {
  __typename?: "UpdateTagResponse";
  success: Scalars["Boolean"];
  message: Scalars["String"];
  updatedTag?: Maybe<Tag>;
};

export type User = {
  __typename?: "User";
  id: Scalars["ID"];
  name: Scalars["String"];
  email: Scalars["String"];
  email_verified?: Maybe<Scalars["DateTime"]>;
  image?: Maybe<Scalars["String"]>;
  roles: Array<Scalars["String"]>;
  isSubscribed: Scalars["Boolean"];
  userFavorites: Array<UserFavorite>;
  orders: Array<Order>;
  shoppingBagItems?: Maybe<Array<Product>>;
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
};

export type UserFavorite = {
  __typename?: "UserFavorite";
  userId: User;
  user: User;
  photoId: Photo;
  photo: Photo;
};

export type UserPreferencesResponse = {
  __typename?: "UserPreferencesResponse";
  favorites?: Maybe<Array<UserFavorite>>;
  shoppingBagItems?: Maybe<Array<Product>>;
};

export type UserSearchResult = Subject | Tag | Location;

export type AllPhotosInCollectionQueryVariables = Exact<{
  input: AllPhotosInCollectionInput;
}>;

export type AllPhotosInCollectionQuery = { __typename?: "Query" } & {
  allPhotosInCollection: {
    __typename?: "AllPhotosInCollectionResponse";
  } & Pick<AllPhotosInCollectionResponse, "total"> & {
      collectionInfo: { __typename?: "Collection" } & Pick<
        Collection,
        "id" | "name" | "description"
      > & { coverImage?: Maybe<{ __typename?: "Image" } & ImageInfoFragment> };
      photos: Array<{ __typename?: "Photo" } & PhotoInfoFragment>;
    };
};

export type FrameInfoFragment = { __typename?: "Frame" } & Pick<
  Frame,
  | "id"
  | "name"
  | "displayName"
  | "sortIndex"
  | "description"
  | "material"
  | "color"
  | "printType"
  | "frameSku"
  | "aspectRatio"
  | "dimension1"
  | "dimension2"
  | "retailPrice"
  | "createdAt"
  | "updatedAt"
> & {
    coverImage?: Maybe<
      { __typename?: "Image" } & Pick<
        Image,
        | "id"
        | "imageName"
        | "fileExtension"
        | "imageUrl"
        | "altText"
        | "aspectRatio"
        | "size"
        | "width"
        | "height"
        | "isPortrait"
        | "isPanoramic"
        | "createdAt"
        | "updatedAt"
      >
    >;
  };

export type ImageInfoFragment = { __typename?: "Image" } & Pick<
  Image,
  | "id"
  | "imageName"
  | "fileExtension"
  | "imageUrl"
  | "altText"
  | "aspectRatio"
  | "size"
  | "width"
  | "height"
  | "isPortrait"
  | "isPanoramic"
  | "createdAt"
  | "updatedAt"
>;

export type AllPhotosAtLocationQueryVariables = Exact<{
  input: AllPhotosAtLocationInput;
}>;

export type AllPhotosAtLocationQuery = { __typename?: "Query" } & {
  allPhotosAtLocation: { __typename?: "AllPhotosAtLocationResponse" } & Pick<
    AllPhotosAtLocationResponse,
    "total"
  > & { photos: Array<{ __typename?: "Photo" } & PhotoInfoFragment> };
};

export type MatInfoFragment = { __typename?: "Mat" } & Pick<
  Mat,
  | "id"
  | "name"
  | "displayName"
  | "description"
  | "color"
  | "printType"
  | "matSku"
  | "aspectRatio"
  | "dimension1"
  | "dimension2"
  | "retailPrice"
  | "createdAt"
  | "updatedAt"
> & {
    coverImage?: Maybe<
      { __typename?: "Image" } & Pick<
        Image,
        | "id"
        | "imageName"
        | "fileExtension"
        | "imageUrl"
        | "altText"
        | "aspectRatio"
        | "size"
        | "width"
        | "height"
        | "isPortrait"
        | "isPanoramic"
        | "createdAt"
        | "updatedAt"
      >
    >;
  };

export type PhotographerInfoFragment = { __typename?: "Photographer" } & Pick<
  Photographer,
  "id" | "name" | "firstName" | "lastName" | "email" | "bio"
> & { coverImage?: Maybe<{ __typename?: "Image" } & ImageInfoFragment> };

export type AllPhotosByPhotographerQueryVariables = Exact<{
  input: AllPhotosByPhotographerInput;
}>;

export type AllPhotosByPhotographerQuery = { __typename?: "Query" } & {
  allPhotosByPhotographer: {
    __typename?: "AllPhotosByPhotographerResponse";
  } & Pick<AllPhotosByPhotographerResponse, "total"> & {
      photographerInfo: {
        __typename?: "Photographer";
      } & PhotographerInfoFragment;
      photos: Array<{ __typename?: "Photo" } & PhotoInfoFragment>;
    };
};

export type PhotoInfoFragment = { __typename?: "Photo" } & Pick<
  Photo,
  | "id"
  | "rating"
  | "sku"
  | "sortIndex"
  | "title"
  | "description"
  | "isFeatured"
  | "isLimitedEdition"
  | "isHidden"
  | "basePrice12"
  | "priceModifier12"
  | "retailPrice12"
  | "basePrice16"
  | "priceModifier16"
  | "retailPrice16"
  | "basePrice20"
  | "priceModifier20"
  | "retailPrice20"
  | "basePrice24"
  | "priceModifier24"
  | "retailPrice24"
  | "basePrice30"
  | "priceModifier30"
  | "retailPrice30"
> & {
    sharingImage?: Maybe<
      { __typename?: "Image" } & Pick<
        Image,
        | "id"
        | "imageName"
        | "fileExtension"
        | "imageUrl"
        | "altText"
        | "aspectRatio"
        | "size"
        | "width"
        | "height"
        | "isPortrait"
        | "isPanoramic"
      >
    >;
    emailSharingImage?: Maybe<
      { __typename?: "Image" } & Pick<
        Image,
        | "id"
        | "imageName"
        | "fileExtension"
        | "imageUrl"
        | "altText"
        | "aspectRatio"
        | "size"
        | "width"
        | "height"
        | "isPortrait"
        | "isPanoramic"
      >
    >;
    images: Array<
      { __typename?: "Image" } & Pick<
        Image,
        | "id"
        | "imageName"
        | "fileExtension"
        | "imageUrl"
        | "altText"
        | "aspectRatio"
        | "size"
        | "width"
        | "height"
        | "isPortrait"
        | "isPanoramic"
      >
    >;
    photographer?: Maybe<{ __typename?: "Photographer" } & Pick<Photographer, "id" | "name">>;
    location?: Maybe<{ __typename?: "Location" } & Pick<Location, "id" | "name">>;
    subjectsInPhoto?: Maybe<
      Array<
        { __typename?: "PhotoSubject" } & {
          subject: { __typename?: "Subject" } & Pick<Subject, "id" | "name">;
        }
      >
    >;
    tagsForPhoto?: Maybe<
      Array<
        { __typename?: "PhotoTag" } & {
          tag: { __typename?: "Tag" } & Pick<Tag, "id" | "name">;
        }
      >
    >;
    collectionsForPhoto?: Maybe<
      Array<
        { __typename?: "PhotoCollection" } & {
          collection: { __typename?: "Collection" } & Pick<Collection, "id" | "name">;
        }
      >
    >;
  };

export type AllFeaturedPhotosQueryVariables = Exact<{ [key: string]: never }>;

export type AllFeaturedPhotosQuery = { __typename?: "Query" } & {
  allFeaturedPhotos: { __typename?: "AllFeaturedPhotosResponse" } & Pick<
    AllFeaturedPhotosResponse,
    "total"
  > & { photos: Array<{ __typename?: "Photo" } & PhotoInfoFragment> };
};

export type PhotoWithSkuQueryVariables = Exact<{
  sku: Scalars["Int"];
}>;

export type PhotoWithSkuQuery = { __typename?: "Query" } & {
  photoWithSku: { __typename?: "Photo" } & PhotoInfoFragment;
};

export type PrintInfoFragment = { __typename?: "Print" } & Pick<
  Print,
  | "id"
  | "name"
  | "description"
  | "type"
  | "printSku"
  | "aspectRatio"
  | "dimension1"
  | "dimension2"
  | "retailPrice"
  | "createdAt"
  | "updatedAt"
>;

export type ProductInfoFragment = { __typename?: "Product" } & Pick<
  Product,
  "id" | "productSummary" | "totalRetailPrice" | "createdAt" | "updatedAt"
> & {
    photo: { __typename?: "Photo" } & PhotoInfoFragment;
    print: { __typename?: "Print" } & PrintInfoFragment;
    mat?: Maybe<{ __typename?: "Mat" } & MatInfoFragment>;
    frame?: Maybe<{ __typename?: "Frame" } & FrameInfoFragment>;
  };

export type ProductQueryVariables = Exact<{
  id: Scalars["Int"];
}>;

export type ProductQuery = { __typename?: "Query" } & {
  product?: Maybe<
    { __typename?: "Product" } & Pick<
      Product,
      "id" | "productSummary" | "totalRetailPrice" | "createdAt" | "updatedAt"
    > & {
        photo: { __typename?: "Photo" } & PhotoInfoFragment;
        print: { __typename?: "Print" } & PrintInfoFragment;
        mat?: Maybe<{ __typename?: "Mat" } & MatInfoFragment>;
        frame?: Maybe<{ __typename?: "Frame" } & FrameInfoFragment>;
      }
  >;
};

export type AddProductMutationVariables = Exact<{
  input: AddProductInput;
}>;

export type AddProductMutation = { __typename?: "Mutation" } & {
  addProduct: { __typename?: "AddProductResponse" } & Pick<
    AddProductResponse,
    "success" | "message"
  > & {
      newProduct?: Maybe<
        { __typename?: "Product" } & Pick<Product, "id" | "totalRetailPrice"> & {
            photo: { __typename?: "Photo" } & PhotoInfoFragment;
            print: { __typename?: "Print" } & PrintInfoFragment;
            mat?: Maybe<{ __typename?: "Mat" } & MatInfoFragment>;
            frame?: Maybe<{ __typename?: "Frame" } & FrameInfoFragment>;
          }
      >;
    };
};

export type UpdateProductMutationVariables = Exact<{
  id: Scalars["Int"];
  input: UpdateProductInput;
}>;

export type UpdateProductMutation = { __typename?: "Mutation" } & {
  updateProduct: { __typename?: "UpdateProductResponse" } & Pick<
    UpdateProductResponse,
    "success" | "message"
  > & {
      updatedProduct?: Maybe<
        { __typename?: "Product" } & Pick<Product, "id" | "totalRetailPrice"> & {
            photo: { __typename?: "Photo" } & PhotoInfoFragment;
            print: { __typename?: "Print" } & PrintInfoFragment;
            mat?: Maybe<{ __typename?: "Mat" } & MatInfoFragment>;
            frame?: Maybe<{ __typename?: "Frame" } & FrameInfoFragment>;
          }
      >;
    };
};

export type DeleteProductMutationVariables = Exact<{
  id: Scalars["Int"];
}>;

export type DeleteProductMutation = { __typename?: "Mutation" } & {
  deleteProduct: { __typename?: "SuccessMessageResponse" } & Pick<
    SuccessMessageResponse,
    "success" | "message"
  >;
};

export type AllPhotosOfSubjectQueryVariables = Exact<{
  input: AllPhotosOfSubjectInput;
}>;

export type AllPhotosOfSubjectQuery = { __typename?: "Query" } & {
  allPhotosOfSubject: { __typename?: "AllPhotosOfSubjectResponse" } & Pick<
    AllPhotosOfSubjectResponse,
    "total"
  > & { photos: Array<{ __typename?: "Photo" } & PhotoInfoFragment> };
};

export type AllPhotosWithTagQueryVariables = Exact<{
  input: AllPhotosWithTagInput;
}>;

export type AllPhotosWithTagQuery = { __typename?: "Query" } & {
  allPhotosWithTag: { __typename?: "AllPhotosWithTagResponse" } & Pick<
    AllPhotosWithTagResponse,
    "total"
  > & {
      tagInfo: { __typename?: "Tag" } & Pick<Tag, "id" | "name" | "description"> & {
          coverImage?: Maybe<{ __typename?: "Image" } & ImageInfoFragment>;
        };
      photos: Array<{ __typename?: "Photo" } & PhotoInfoFragment>;
    };
};

export type AddPhotoToFavoritesMutationVariables = Exact<{
  photoId: Scalars["Float"];
}>;

export type AddPhotoToFavoritesMutation = { __typename?: "Mutation" } & {
  addPhotoToFavorites: { __typename?: "AddPhotoToFavoritesResponse" } & Pick<
    AddPhotoToFavoritesResponse,
    "success" | "message" | "addedPhotoWithId"
  >;
};

export type RemovePhotoFromFavoritesMutationVariables = Exact<{
  photoId: Scalars["Float"];
}>;

export type RemovePhotoFromFavoritesMutation = { __typename?: "Mutation" } & {
  removePhotoFromFavorites: {
    __typename?: "RemovePhotoFromFavoritesResponse";
  } & Pick<RemovePhotoFromFavoritesResponse, "success" | "message" | "removedPhotoWithId">;
};

export type FavoritesQueryVariables = Exact<{ [key: string]: never }>;

export type FavoritesQuery = { __typename?: "Query" } & {
  favorites: { __typename?: "FavoritesResponse" } & {
    photoList?: Maybe<Array<{ __typename?: "Photo" } & PhotoInfoFragment>>;
  };
};

export type ShoppingBagItemsQueryVariables = Exact<{ [key: string]: never }>;

export type ShoppingBagItemsQuery = { __typename?: "Query" } & {
  shoppingBagItems: { __typename?: "ShoppingBagItemsResponse" } & {
    dataList?: Maybe<
      Array<
        { __typename?: "Product" } & Pick<
          Product,
          "id" | "totalRetailPrice" | "productSummary" | "createdAt" | "updatedAt"
        > & {
            photo: { __typename?: "Photo" } & PhotoInfoFragment;
            print: { __typename?: "Print" } & PrintInfoFragment;
            mat?: Maybe<{ __typename?: "Mat" } & MatInfoFragment>;
            frame?: Maybe<{ __typename?: "Frame" } & FrameInfoFragment>;
          }
      >
    >;
  };
};

export type AddProductToShoppingBagMutationVariables = Exact<{
  productId: Scalars["Float"];
}>;

export type AddProductToShoppingBagMutation = { __typename?: "Mutation" } & {
  addProductToShoppingBag: {
    __typename?: "AddProductToShoppingBagResponse";
  } & Pick<AddProductToShoppingBagResponse, "success" | "message"> & {
      addedProduct?: Maybe<
        { __typename?: "Product" } & Pick<Product, "id" | "totalRetailPrice"> & {
            photo: { __typename?: "Photo" } & PhotoInfoFragment;
            print: { __typename?: "Print" } & PrintInfoFragment;
            mat?: Maybe<{ __typename?: "Mat" } & MatInfoFragment>;
            frame?: Maybe<{ __typename?: "Frame" } & FrameInfoFragment>;
          }
      >;
    };
};

export type RemoveProductFromShoppingBagMutationVariables = Exact<{
  productId: Scalars["Float"];
}>;

export type RemoveProductFromShoppingBagMutation = {
  __typename?: "Mutation";
} & {
  removeProductFromShoppingBag: {
    __typename?: "SuccessMessageResponse";
  } & Pick<SuccessMessageResponse, "success" | "message">;
};

export type GetUserPreferencesQueryVariables = Exact<{ [key: string]: never }>;

export type GetUserPreferencesQuery = { __typename?: "Query" } & {
  getUserPreferences: { __typename?: "UserPreferencesResponse" } & {
    favorites?: Maybe<
      Array<
        { __typename?: "UserFavorite" } & {
          photo: { __typename?: "Photo" } & PhotoInfoFragment;
        }
      >
    >;
    shoppingBagItems?: Maybe<
      Array<
        { __typename?: "Product" } & {
          photo: { __typename?: "Photo" } & PhotoInfoFragment;
        }
      >
    >;
  };
};

export const ImageInfoFragmentDoc: DocumentNode<ImageInfoFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ImageInfo" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Image" }
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "imageName" } },
          { kind: "Field", name: { kind: "Name", value: "fileExtension" } },
          { kind: "Field", name: { kind: "Name", value: "imageUrl" } },
          { kind: "Field", name: { kind: "Name", value: "altText" } },
          { kind: "Field", name: { kind: "Name", value: "aspectRatio" } },
          { kind: "Field", name: { kind: "Name", value: "size" } },
          { kind: "Field", name: { kind: "Name", value: "width" } },
          { kind: "Field", name: { kind: "Name", value: "height" } },
          { kind: "Field", name: { kind: "Name", value: "isPortrait" } },
          { kind: "Field", name: { kind: "Name", value: "isPanoramic" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" } }
        ]
      }
    }
  ]
};
export const PhotographerInfoFragmentDoc: DocumentNode<PhotographerInfoFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "PhotographerInfo" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Photographer" }
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "firstName" } },
          { kind: "Field", name: { kind: "Name", value: "lastName" } },
          { kind: "Field", name: { kind: "Name", value: "email" } },
          { kind: "Field", name: { kind: "Name", value: "bio" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "coverImage" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "ImageInfo" }
                }
              ]
            }
          }
        ]
      }
    },
    ...ImageInfoFragmentDoc.definitions
  ]
};
export const PhotoInfoFragmentDoc: DocumentNode<PhotoInfoFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "PhotoInfo" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Photo" }
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "rating" } },
          { kind: "Field", name: { kind: "Name", value: "sku" } },
          { kind: "Field", name: { kind: "Name", value: "sortIndex" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "isFeatured" } },
          { kind: "Field", name: { kind: "Name", value: "isLimitedEdition" } },
          { kind: "Field", name: { kind: "Name", value: "isHidden" } },
          { kind: "Field", name: { kind: "Name", value: "rating" } },
          { kind: "Field", name: { kind: "Name", value: "basePrice12" } },
          { kind: "Field", name: { kind: "Name", value: "priceModifier12" } },
          { kind: "Field", name: { kind: "Name", value: "retailPrice12" } },
          { kind: "Field", name: { kind: "Name", value: "basePrice16" } },
          { kind: "Field", name: { kind: "Name", value: "priceModifier16" } },
          { kind: "Field", name: { kind: "Name", value: "retailPrice16" } },
          { kind: "Field", name: { kind: "Name", value: "basePrice20" } },
          { kind: "Field", name: { kind: "Name", value: "priceModifier20" } },
          { kind: "Field", name: { kind: "Name", value: "retailPrice20" } },
          { kind: "Field", name: { kind: "Name", value: "basePrice24" } },
          { kind: "Field", name: { kind: "Name", value: "priceModifier24" } },
          { kind: "Field", name: { kind: "Name", value: "retailPrice24" } },
          { kind: "Field", name: { kind: "Name", value: "basePrice30" } },
          { kind: "Field", name: { kind: "Name", value: "priceModifier30" } },
          { kind: "Field", name: { kind: "Name", value: "retailPrice30" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "sharingImage" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "imageName" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "fileExtension" }
                },
                { kind: "Field", name: { kind: "Name", value: "imageUrl" } },
                { kind: "Field", name: { kind: "Name", value: "altText" } },
                { kind: "Field", name: { kind: "Name", value: "aspectRatio" } },
                { kind: "Field", name: { kind: "Name", value: "size" } },
                { kind: "Field", name: { kind: "Name", value: "width" } },
                { kind: "Field", name: { kind: "Name", value: "height" } },
                { kind: "Field", name: { kind: "Name", value: "isPortrait" } },
                { kind: "Field", name: { kind: "Name", value: "isPanoramic" } }
              ]
            }
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "emailSharingImage" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "imageName" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "fileExtension" }
                },
                { kind: "Field", name: { kind: "Name", value: "imageUrl" } },
                { kind: "Field", name: { kind: "Name", value: "altText" } },
                { kind: "Field", name: { kind: "Name", value: "aspectRatio" } },
                { kind: "Field", name: { kind: "Name", value: "size" } },
                { kind: "Field", name: { kind: "Name", value: "width" } },
                { kind: "Field", name: { kind: "Name", value: "height" } },
                { kind: "Field", name: { kind: "Name", value: "isPortrait" } },
                { kind: "Field", name: { kind: "Name", value: "isPanoramic" } }
              ]
            }
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "images" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "imageName" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "fileExtension" }
                },
                { kind: "Field", name: { kind: "Name", value: "imageUrl" } },
                { kind: "Field", name: { kind: "Name", value: "altText" } },
                { kind: "Field", name: { kind: "Name", value: "aspectRatio" } },
                { kind: "Field", name: { kind: "Name", value: "size" } },
                { kind: "Field", name: { kind: "Name", value: "width" } },
                { kind: "Field", name: { kind: "Name", value: "height" } },
                { kind: "Field", name: { kind: "Name", value: "isPortrait" } },
                { kind: "Field", name: { kind: "Name", value: "isPanoramic" } }
              ]
            }
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "photographer" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } }
              ]
            }
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "location" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } }
              ]
            }
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "subjectsInPhoto" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "subject" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } }
                    ]
                  }
                }
              ]
            }
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "tagsForPhoto" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "tag" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } }
                    ]
                  }
                }
              ]
            }
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "collectionsForPhoto" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "collection" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
};
export const PrintInfoFragmentDoc: DocumentNode<PrintInfoFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "PrintInfo" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Print" }
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "type" } },
          { kind: "Field", name: { kind: "Name", value: "printSku" } },
          { kind: "Field", name: { kind: "Name", value: "aspectRatio" } },
          { kind: "Field", name: { kind: "Name", value: "dimension1" } },
          { kind: "Field", name: { kind: "Name", value: "dimension2" } },
          { kind: "Field", name: { kind: "Name", value: "retailPrice" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" } }
        ]
      }
    }
  ]
};
export const MatInfoFragmentDoc: DocumentNode<MatInfoFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "MatInfo" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Mat" }
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "displayName" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "color" } },
          { kind: "Field", name: { kind: "Name", value: "printType" } },
          { kind: "Field", name: { kind: "Name", value: "matSku" } },
          { kind: "Field", name: { kind: "Name", value: "aspectRatio" } },
          { kind: "Field", name: { kind: "Name", value: "dimension1" } },
          { kind: "Field", name: { kind: "Name", value: "dimension2" } },
          { kind: "Field", name: { kind: "Name", value: "retailPrice" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "coverImage" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "imageName" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "fileExtension" }
                },
                { kind: "Field", name: { kind: "Name", value: "imageUrl" } },
                { kind: "Field", name: { kind: "Name", value: "altText" } },
                { kind: "Field", name: { kind: "Name", value: "aspectRatio" } },
                { kind: "Field", name: { kind: "Name", value: "size" } },
                { kind: "Field", name: { kind: "Name", value: "width" } },
                { kind: "Field", name: { kind: "Name", value: "height" } },
                { kind: "Field", name: { kind: "Name", value: "isPortrait" } },
                { kind: "Field", name: { kind: "Name", value: "isPanoramic" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } }
              ]
            }
          }
        ]
      }
    }
  ]
};
export const FrameInfoFragmentDoc: DocumentNode<FrameInfoFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "FrameInfo" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Frame" }
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "displayName" } },
          { kind: "Field", name: { kind: "Name", value: "sortIndex" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "material" } },
          { kind: "Field", name: { kind: "Name", value: "color" } },
          { kind: "Field", name: { kind: "Name", value: "printType" } },
          { kind: "Field", name: { kind: "Name", value: "frameSku" } },
          { kind: "Field", name: { kind: "Name", value: "aspectRatio" } },
          { kind: "Field", name: { kind: "Name", value: "dimension1" } },
          { kind: "Field", name: { kind: "Name", value: "dimension2" } },
          { kind: "Field", name: { kind: "Name", value: "retailPrice" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "coverImage" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "imageName" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "fileExtension" }
                },
                { kind: "Field", name: { kind: "Name", value: "imageUrl" } },
                { kind: "Field", name: { kind: "Name", value: "altText" } },
                { kind: "Field", name: { kind: "Name", value: "aspectRatio" } },
                { kind: "Field", name: { kind: "Name", value: "size" } },
                { kind: "Field", name: { kind: "Name", value: "width" } },
                { kind: "Field", name: { kind: "Name", value: "height" } },
                { kind: "Field", name: { kind: "Name", value: "isPortrait" } },
                { kind: "Field", name: { kind: "Name", value: "isPanoramic" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } }
              ]
            }
          }
        ]
      }
    }
  ]
};
export const ProductInfoFragmentDoc: DocumentNode<ProductInfoFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ProductInfo" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Product" }
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "productSummary" } },
          { kind: "Field", name: { kind: "Name", value: "totalRetailPrice" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "photo" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "PhotoInfo" }
                }
              ]
            }
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "print" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "PrintInfo" }
                }
              ]
            }
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "mat" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "MatInfo" }
                }
              ]
            }
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "frame" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "FrameInfo" }
                }
              ]
            }
          },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" } }
        ]
      }
    },
    ...PhotoInfoFragmentDoc.definitions,
    ...PrintInfoFragmentDoc.definitions,
    ...MatInfoFragmentDoc.definitions,
    ...FrameInfoFragmentDoc.definitions
  ]
};
export const AllPhotosInCollectionDocument: DocumentNode<
  AllPhotosInCollectionQuery,
  AllPhotosInCollectionQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "allPhotosInCollection" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" }
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "AllPhotosInCollectionInput" }
            }
          }
        }
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "allPhotosInCollection" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" }
                }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "collectionInfo" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "description" }
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "coverImage" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "ImageInfo" }
                            }
                          ]
                        }
                      }
                    ]
                  }
                },
                { kind: "Field", name: { kind: "Name", value: "total" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "photos" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "PhotoInfo" }
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    },
    ...ImageInfoFragmentDoc.definitions,
    ...PhotoInfoFragmentDoc.definitions
  ]
};
export const AllPhotosAtLocationDocument: DocumentNode<
  AllPhotosAtLocationQuery,
  AllPhotosAtLocationQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "allPhotosAtLocation" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" }
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "AllPhotosAtLocationInput" }
            }
          }
        }
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "allPhotosAtLocation" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" }
                }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "total" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "photos" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "PhotoInfo" }
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    },
    ...PhotoInfoFragmentDoc.definitions
  ]
};
export const AllPhotosByPhotographerDocument: DocumentNode<
  AllPhotosByPhotographerQuery,
  AllPhotosByPhotographerQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "allPhotosByPhotographer" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" }
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "AllPhotosByPhotographerInput" }
            }
          }
        }
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "allPhotosByPhotographer" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" }
                }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "photographerInfo" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "PhotographerInfo" }
                      }
                    ]
                  }
                },
                { kind: "Field", name: { kind: "Name", value: "total" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "photos" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "PhotoInfo" }
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    },
    ...PhotographerInfoFragmentDoc.definitions,
    ...PhotoInfoFragmentDoc.definitions
  ]
};
export const AllFeaturedPhotosDocument: DocumentNode<
  AllFeaturedPhotosQuery,
  AllFeaturedPhotosQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "allFeaturedPhotos" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "allFeaturedPhotos" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "total" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "photos" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "PhotoInfo" }
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    },
    ...PhotoInfoFragmentDoc.definitions
  ]
};
export const PhotoWithSkuDocument: DocumentNode<PhotoWithSkuQuery, PhotoWithSkuQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "photoWithSku" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "sku" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } }
          }
        }
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "photoWithSku" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "sku" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "sku" }
                }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "PhotoInfo" }
                }
              ]
            }
          }
        ]
      }
    },
    ...PhotoInfoFragmentDoc.definitions
  ]
};
export const ProductDocument: DocumentNode<ProductQuery, ProductQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "product" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } }
          }
        }
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "product" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" }
                }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "productSummary" }
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "totalRetailPrice" }
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "photo" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "PhotoInfo" }
                      }
                    ]
                  }
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "print" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "PrintInfo" }
                      }
                    ]
                  }
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "mat" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "MatInfo" }
                      }
                    ]
                  }
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "frame" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "FrameInfo" }
                      }
                    ]
                  }
                },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } }
              ]
            }
          }
        ]
      }
    },
    ...PhotoInfoFragmentDoc.definitions,
    ...PrintInfoFragmentDoc.definitions,
    ...MatInfoFragmentDoc.definitions,
    ...FrameInfoFragmentDoc.definitions
  ]
};
export const AddProductDocument: DocumentNode<AddProductMutation, AddProductMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "addProduct" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" }
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "AddProductInput" }
            }
          }
        }
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "addProduct" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" }
                }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "success" } },
                { kind: "Field", name: { kind: "Name", value: "message" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "newProduct" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "totalRetailPrice" }
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "photo" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "PhotoInfo" }
                            }
                          ]
                        }
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "print" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "PrintInfo" }
                            }
                          ]
                        }
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "mat" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "MatInfo" }
                            }
                          ]
                        }
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "frame" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "FrameInfo" }
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    },
    ...PhotoInfoFragmentDoc.definitions,
    ...PrintInfoFragmentDoc.definitions,
    ...MatInfoFragmentDoc.definitions,
    ...FrameInfoFragmentDoc.definitions
  ]
};
export const UpdateProductDocument: DocumentNode<
  UpdateProductMutation,
  UpdateProductMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "updateProduct" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } }
          }
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" }
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "UpdateProductInput" }
            }
          }
        }
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "updateProduct" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" }
                }
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" }
                }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "success" } },
                { kind: "Field", name: { kind: "Name", value: "message" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "updatedProduct" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "totalRetailPrice" }
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "photo" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "PhotoInfo" }
                            }
                          ]
                        }
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "print" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "PrintInfo" }
                            }
                          ]
                        }
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "mat" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "MatInfo" }
                            }
                          ]
                        }
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "frame" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "FrameInfo" }
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    },
    ...PhotoInfoFragmentDoc.definitions,
    ...PrintInfoFragmentDoc.definitions,
    ...MatInfoFragmentDoc.definitions,
    ...FrameInfoFragmentDoc.definitions
  ]
};
export const DeleteProductDocument: DocumentNode<
  DeleteProductMutation,
  DeleteProductMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "deleteProduct" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } }
          }
        }
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "deleteProduct" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" }
                }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "success" } },
                { kind: "Field", name: { kind: "Name", value: "message" } }
              ]
            }
          }
        ]
      }
    }
  ]
};
export const AllPhotosOfSubjectDocument: DocumentNode<
  AllPhotosOfSubjectQuery,
  AllPhotosOfSubjectQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "allPhotosOfSubject" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" }
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "AllPhotosOfSubjectInput" }
            }
          }
        }
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "allPhotosOfSubject" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" }
                }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "total" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "photos" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "PhotoInfo" }
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    },
    ...PhotoInfoFragmentDoc.definitions
  ]
};
export const AllPhotosWithTagDocument: DocumentNode<
  AllPhotosWithTagQuery,
  AllPhotosWithTagQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "allPhotosWithTag" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" }
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "AllPhotosWithTagInput" }
            }
          }
        }
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "allPhotosWithTag" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" }
                }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "tagInfo" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "description" }
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "coverImage" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "ImageInfo" }
                            }
                          ]
                        }
                      }
                    ]
                  }
                },
                { kind: "Field", name: { kind: "Name", value: "total" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "photos" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "PhotoInfo" }
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    },
    ...ImageInfoFragmentDoc.definitions,
    ...PhotoInfoFragmentDoc.definitions
  ]
};
export const AddPhotoToFavoritesDocument: DocumentNode<
  AddPhotoToFavoritesMutation,
  AddPhotoToFavoritesMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "addPhotoToFavorites" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "photoId" }
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Float" } }
          }
        }
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "addPhotoToFavorites" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "photoId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "photoId" }
                }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "success" } },
                { kind: "Field", name: { kind: "Name", value: "message" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "addedPhotoWithId" }
                }
              ]
            }
          }
        ]
      }
    }
  ]
};
export const RemovePhotoFromFavoritesDocument: DocumentNode<
  RemovePhotoFromFavoritesMutation,
  RemovePhotoFromFavoritesMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "removePhotoFromFavorites" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "photoId" }
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Float" } }
          }
        }
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "removePhotoFromFavorites" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "photoId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "photoId" }
                }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "success" } },
                { kind: "Field", name: { kind: "Name", value: "message" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "removedPhotoWithId" }
                }
              ]
            }
          }
        ]
      }
    }
  ]
};
export const FavoritesDocument: DocumentNode<FavoritesQuery, FavoritesQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "favorites" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "favorites" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "photoList" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "PhotoInfo" }
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    },
    ...PhotoInfoFragmentDoc.definitions
  ]
};
export const ShoppingBagItemsDocument: DocumentNode<
  ShoppingBagItemsQuery,
  ShoppingBagItemsQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "shoppingBagItems" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "shoppingBagItems" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "dataList" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "totalRetailPrice" }
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "productSummary" }
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "photo" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "PhotoInfo" }
                            }
                          ]
                        }
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "print" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "PrintInfo" }
                            }
                          ]
                        }
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "mat" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "MatInfo" }
                            }
                          ]
                        }
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "frame" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "FrameInfo" }
                            }
                          ]
                        }
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" }
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" }
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    },
    ...PhotoInfoFragmentDoc.definitions,
    ...PrintInfoFragmentDoc.definitions,
    ...MatInfoFragmentDoc.definitions,
    ...FrameInfoFragmentDoc.definitions
  ]
};
export const AddProductToShoppingBagDocument: DocumentNode<
  AddProductToShoppingBagMutation,
  AddProductToShoppingBagMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "addProductToShoppingBag" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "productId" }
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Float" } }
          }
        }
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "addProductToShoppingBag" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "productId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "productId" }
                }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "success" } },
                { kind: "Field", name: { kind: "Name", value: "message" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "addedProduct" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "totalRetailPrice" }
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "photo" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "PhotoInfo" }
                            }
                          ]
                        }
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "print" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "PrintInfo" }
                            }
                          ]
                        }
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "mat" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "MatInfo" }
                            }
                          ]
                        }
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "frame" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "FrameInfo" }
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    },
    ...PhotoInfoFragmentDoc.definitions,
    ...PrintInfoFragmentDoc.definitions,
    ...MatInfoFragmentDoc.definitions,
    ...FrameInfoFragmentDoc.definitions
  ]
};
export const RemoveProductFromShoppingBagDocument: DocumentNode<
  RemoveProductFromShoppingBagMutation,
  RemoveProductFromShoppingBagMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "removeProductFromShoppingBag" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "productId" }
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Float" } }
          }
        }
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "removeProductFromShoppingBag" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "productId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "productId" }
                }
              }
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "success" } },
                { kind: "Field", name: { kind: "Name", value: "message" } }
              ]
            }
          }
        ]
      }
    }
  ]
};
export const GetUserPreferencesDocument: DocumentNode<
  GetUserPreferencesQuery,
  GetUserPreferencesQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getUserPreferences" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getUserPreferences" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "favorites" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "photo" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "PhotoInfo" }
                            }
                          ]
                        }
                      }
                    ]
                  }
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "shoppingBagItems" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "photo" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "PhotoInfo" }
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    },
    ...PhotoInfoFragmentDoc.definitions
  ]
};
