import { Rating } from '@/entities/Rating';
import { rtkApi } from '@/shared/api/rtkApi';

interface GetProfileRate {
    userId: string;
    profileId: string;
}

interface SetProfileRate {
    userId: string;
    profileId: string;
    rate: number;
    feedback?: string;
}

const profileRatingApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getProfileRateByUser: build.query<Rating[], GetProfileRate>({
            query: ({ userId, profileId }) => ({
                url: `${__API__}/profile-ratings`,
                params: {
                    userId,
                    profileId,
                },
            }),
        }),
        setProfileRate: build.mutation<void, SetProfileRate>({
            query: (body) => ({
                url: `${__API__}/profile-ratings`,
                method: 'POST',
                body,
            }),
        }),
    }),
    overrideExisting: false,
});

export const getProfileRate = profileRatingApi.useGetProfileRateByUserQuery;
export const { useSetProfileRateMutation } = profileRatingApi;
