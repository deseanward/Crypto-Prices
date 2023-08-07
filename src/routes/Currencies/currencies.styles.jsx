import tw, { styled } from 'twin.macro';

export const CurrenciesContainer = styled.div`
	${tw`
        flex flex-col gap-y-4 w-full w-[70vw]
    `}

	h1 {
		${tw`text-4xl font-bold`}
	}
`;

export const CurrenciesContent = styled.section`
	${tw`flex flex-col items-start`}
`;
