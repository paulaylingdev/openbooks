/**
 * Generated by orval v6.9.6 🍺
 * Do not edit manually.
 * OpenBooks Search Service
 * This service provides advanced search capabilities to OpenBooks as well as a management interface.
 * OpenAPI spec version: 1.0
 */
import type { GormDeletedAt } from "./gormDeletedAt";

export interface ModelHistory {
  createdAt?: string;
  deletedAt?: GormDeletedAt;
  ended_at?: string;
  error_count?: number;
  id?: number;
  schedule_id?: number;
  started_at?: string;
  success_count?: number;
  updatedAt?: string;
}