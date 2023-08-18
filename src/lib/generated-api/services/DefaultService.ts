/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IndexGetResponse } from '../models/IndexGetResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class DefaultService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Index
     * @returns IndexGetResponse Successful Response
     * @throws ApiError
     */
    public indexGet(): CancelablePromise<IndexGetResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/',
        });
    }

    /**
     * Get Student
     * @param studentId Student ID
     * @returns any Successful Response
     * @throws ApiError
     */
    public getStudentGetStudentStudentIdGet(
        studentId: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/get-student/{student_id}',
            path: {
                'student_id': studentId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Student
     * @param name
     * @returns any Successful Response
     * @throws ApiError
     */
    public getStudentGetStudentNameGet(
        name?: (string | null),
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/get-student-name',
            query: {
                'name': name,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
