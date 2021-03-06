
import {RatePostData} from '../pojo/post-data';
import {UiTableConfig, UiTable, UITableAction, UiTableOptions} from '../components/ui-table';
import {YBIExistingTariffResponseResult, YBIExistingTariffResponse} from '../pojo/ybi-tariff-response';

import {Observable, Subject, Subscription} from "rxjs/Rx";

export interface TestDataRow {

	// booking info
	arrival?: string;
	departure?: string;
	adults?: number;
	children?: number;
	los?: number;

	// property info
	basePrice?: number;
	bookingFee?: number;
	cleaningBase?: number;
	cleaningDayBlock?: number;
	cleaningPricePerBlock?: number;
	adultsAbove?: number;
	adultsSurchargeAbove?: number;
	childrenAbove?: number;
	childrenSurchargeAbove?: number;
	tax?: number;

	// season1 info
	season1name?: string;
	season1P1Start?: string;
	season1P1End?: string;
	season1P2Start?: string;
	season1P2End?: string;
	season1PriceType?: string;
	season1PriceOrFactor?: number;
	season1OptionalWeekly?: number;
	season1ProRataUse?: string;
	season1Rule1Name?: string;
	season1Rule1ConditionName?: string;
	season1Rule1ConditionValue?: number;
	season1Rule1ActionName?: string;
	season1Rule1ActionValue?: number;
	season1Rule2Name?: string;
	season1Rule2ConditionName?: string;
	season1Rule2ConditionValue?: number;
	season1Rule2ActionName?: string;
	season1Rule2ActionValue?: number;

	// season2 info
	season2name?:string;
	season2P1Start?: string;
	season2P1End?: string;
	season2PriceType?: string;
	season2PriceOrFactor?: number;
	season2OptionalWeekly?: number;
	season2ProRataUse?: string;
	season2Rule1Name?: string;
	season2Rule1ConditionName?: string;
	season2Rule1ConditionValue?: number;
	season2Rule1ActionName?: string;
	season2Rule1ActionValue?: number;
	season2Rule2Name?: string;
	season2Rule2ConditionName?: string;
	season2Rule2ConditionValue?: number;
	season2Rule2ActionName?: string;
	season2Rule2ActionValue?: number;

	// calculated existing results
	total?: number;
	rent?: number;
	cleaning?: number;
	guestFee?: number;
	bondFee?: number;
	resultBookingFee1?: number;
	desc?: string;
	testResult?: string;

	// calculated new results
	total2?: number;
	rent2?: number;
	cleaning2?: number;
	guestFee2?: number;
	bondFee2?: number;
	resultBookingFee2?: number;
	desc2?: string;
	testResult2?: string;

	id?: number;
}

export interface TestPlanItem {

	name: string;

	title: string;

	description: string;

	numOfTests?: number;

	numOfSuccesses?: number;

	numOfFailures?: number;

	testVector?: RatePostData[];

	testResultConfig?:  UiTableConfig[];

	ybiExistingResponse$?: Observable<YBIExistingTariffResponse>,

	testResultData$?: Observable<TestDataRow[]>;

	currentResultData$?: Subject<TestDataRow[]>;

	testResultSubscription?: Subscription;

	ybiTariffResponseSubscription?: Subscription;
}



