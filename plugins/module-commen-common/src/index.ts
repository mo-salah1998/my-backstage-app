/***/
/**
 * Common functionalities for the module-commen plugin.
 *
 * @packageDocumentation
 */
import { Entity } from '@backstage/catalog-model';
/**
 * In this package you might for example declare types that are common
 * between the frontend and backend plugin packages.
 */
export type CommonType = {
  field: string;
};


export const ANNOTATION_ADR_LOCATION = 'backstage.io/adr-location';

const getModuleLocationDir = (entity: Entity) =>
  // entity.metadata.annotations?.[ANNOTATION_ADR_LOCATION]?.trim();
  entity.metadata.annotations?.['strivly.io/workspaces']?.trim();

/**
 * Utility function to determine if the given entity has ADRs.
 * @public
 */
export const isModuleAvailable = (entity: Entity) =>
  Boolean(getModuleLocationDir(entity));

/**
 * Or you might declare some common constants.
 */
export const COMMON_CONSTANT = 1;
