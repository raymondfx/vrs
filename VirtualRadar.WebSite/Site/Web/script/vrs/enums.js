/**
 * @license Copyright © 2013 onwards, Andrew Whewell
 * All rights reserved.
 *
 * Redistribution and use of this software in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
 *    * Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
 *    * Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
 *    * Neither the name of the author nor the names of the program's contributors may be used to endorse or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE AUTHORS OF THE SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
/**
 * @fileoverview Collects together all (well, most) of the enumerations in VRS.
 */
var VRS;
(function (VRS) {
    /*
     * GlobalOptions that don't have a natural home elsewhere
     */
    VRS.globalOptions = VRS.globalOptions || {};
    VRS.globalOptions.aircraftPictureSizeDesktopDetail = VRS.globalOptions.aircraftPictureSizeDesktopDetail || { width: 350 }; // The dimensions for desktop detail pictures.
    VRS.globalOptions.aircraftPictureSizeInfoWindow = VRS.globalOptions.aircraftPictureSizeInfoWindow || { width: 85, height: 40 }; // The dimensions for pictures in the info window.
    VRS.globalOptions.aircraftPictureSizeIPadDetail = VRS.globalOptions.aircraftPictureSizeIPadDetail || { width: 680 }; // The dimensions for iPad detail pictures.
    VRS.globalOptions.aircraftPictureSizeIPhoneDetail = VRS.globalOptions.aircraftPictureSizeIPhoneDetail || { width: 260 }; // The dimensions for iPhone detail pictures.
    VRS.globalOptions.aircraftPictureSizeList = VRS.globalOptions.aircraftPictureSizeList || { width: 60, height: 40 }; // The dimensions for pictures in the list, set to null to have them sized to whatever the server returns.
    /**
     * An enumeration of the different properties that can be compared against a filter by an AircraftFilter.
     * If 3rd party code adds to this list then they should not use 3 letter codes, they are reserved for VRS use.
     */
    VRS.AircraftFilterProperty = {
        Airport: 'air',
        Altitude: 'alt',
        Callsign: 'csn',
        Country: 'cou',
        Distance: 'dis',
        EngineType: 'egt',
        HideNoPosition: 'hnp',
        Icao: 'ico',
        IsMilitary: 'mil',
        ModelIcao: 'typ',
        Operator: 'opr',
        OperatorCode: 'opc',
        Registration: 'reg',
        Species: 'spc',
        Squawk: 'sqk',
        UserInterested: 'int',
        Wtc: 'wtc'
    };
    /**
     * An enumeration of the different fields that the aircraft list can be sorted on.
     * If 3rd party code adds to this list then they should not use 3 letter codes, they are reserved for VRS use.
     */
    VRS.AircraftListSortableField = {
        None: '---',
        Altitude: 'alt',
        AltitudeType: 'aty',
        AverageSignalLevel: 'avs',
        Bearing: 'bng',
        Callsign: 'csn',
        CivOrMil: 'mil',
        CountMessages: 'mct',
        Country: 'cou',
        Distance: 'dis',
        FlightsCount: 'fct',
        Heading: 'hdg',
        HeadingType: 'hty',
        Icao: 'ico',
        Latitude: 'lat',
        Longitude: 'lng',
        Manufacturer: 'man',
        Model: 'mod',
        ModelIcao: 'typ',
        Operator: 'opr',
        OperatorIcao: 'opi',
        Receiver: 'rec',
        Registration: 'reg',
        Serial: 'ser',
        SignalLevel: 'sig',
        Speed: 'spd',
        SpeedType: 'sty',
        Squawk: 'sqk',
        TargetAltitude: 'tal',
        TargetHeading: 'thd',
        TimeTracked: 'tim',
        TransponderType: 'trt',
        UserTag: 'tag',
        VerticalSpeed: 'vsi',
        VerticalSpeedType: 'vty',
        YearBuilt: 'yrb'
    };
    /**
     * An enumeration of the different sources of aircraft list data.
     */
    VRS.AircraftListSource = {
        Unknown: 0,
        BaseStation: 1,
        FakeAircraftList: 2,
        FlightSimulatorX: 3
    };
    /**
     * An enumeration of the different picture sizes understood by the server.
     */
    VRS.AircraftPictureServerSize = {
        DesktopDetailPanel: 'detail',
        IPhoneDetail: 'iPhoneDetail',
        IPadDetail: 'iPadDetail',
        List: 'list',
        Original: 'Full' // Do not resize the aircraft picture
    };
    /**
     * An enumeration of the different horizontal alignments.
     */
    VRS.Alignment = {
        Left: 'l',
        Centre: 'c',
        Right: 'r'
    };
    /**
     * An enumeration of the different altitude types.
     */
    VRS.AltitudeType = {
        Barometric: 0,
        Geometric: 1
    };
    /**
     * An enumeration of the different kinds of display units that an element may be using.
     */
    VRS.DisplayUnitDependency = {
        Height: 'a',
        Speed: 'b',
        Distance: 'c',
        VsiSeconds: 'd',
        FLTransitionAltitude: 'e',
        FLTransitionHeightUnit: 'f',
        FLHeightUnit: 'g',
        Angle: 'h'
    };
    /**
     * An enumeration of the different units that distances can be displayed in.
     */
    VRS.Distance = {
        Kilometre: 'km',
        StatuteMile: 'sm',
        NauticalMile: 'nm'
    };
    /**
     * An enumeration of the different engine types sent by the server.
     */
    VRS.EngineType = {
        None: 0,
        Piston: 1,
        Turbo: 2,
        Jet: 3,
        Electric: 4
    };
    /**
     * An enumeration of the different engine placements sent by the server.
     */
    VRS.EnginePlacement = {
        Unknown: 0,
        AftMounted: 1,
        WingBuried: 2,
        FuselageBuried: 3,
        NoseMounted: 4,
        WingMounted: 5
    };
    /**
     * An enumeration of the different filter conditions.
     */
    VRS.FilterCondition = {
        Equals: 'equ',
        Contains: 'con',
        Between: 'btw',
        Starts: 'srt',
        Ends: 'end'
    };
    /**
     * An enumeration of the different types of properties that filters can deal with.
     */
    VRS.FilterPropertyType = {
        OnOff: 'a',
        TextMatch: 'b',
        NumberRange: 'c',
        EnumMatch: 'd',
        DateRange: 'e',
        TextListMatch: 'f' // As per TextMatch but the value is a list of strings and the condition is true if any string matches
    };
    /**
     * An enumeration of the different units that altitudes can be displayed in.
     */
    VRS.Height = {
        Metre: 'm',
        Feet: 'f'
    };
    /**
     * An enumeration of the different input widths that the CSS supports.
     */
    VRS.InputWidth = {
        Auto: '',
        OneChar: 'oneChar',
        ThreeChar: 'threeChar',
        SixChar: 'sixChar',
        EightChar: 'eightChar',
        NineChar: 'nineChar',
        Long: 'long' // A large input field
    };
    //region LabelWidth
    /**
     * An enumeration of the different label widths that the CSS supports.
     */
    VRS.LabelWidth = {
        Auto: 0,
        Short: 1,
        Long: 2 // Suitable for long labels
    };
    /**
     * An enumeration of different sites that can have links formed from an aircraft's details.
     */
    VRS.LinkSite = {
        None: 'none',
        AirframesDotOrg: 'airframes.org',
        AirlinersDotNet: 'airliners.net',
        AirportDataDotCom: 'airport-data.com',
        StandingDataMaintenance: 'sdm'
    };
    /**
     * An enumeration of the different control styles on a map.
     */
    VRS.MapControlStyle = {
        Default: 'a',
        DropdownMenu: 'b',
        HorizontalBar: 'c'
    };
    /**
     * The location at which controls can be added to the map.
     */
    VRS.MapPosition = {
        BottomCentre: 'bc',
        BottomLeft: 'bl',
        BottomRight: 'br',
        LeftBottom: 'lb',
        LeftCentre: 'lc',
        LeftTop: 'lt',
        RightBottom: 'rb',
        RightCentre: 'rc',
        RightTop: 'rt',
        TopCentre: 'tc',
        TopLeft: 'tl',
        TopRight: 'tr'
    };
    /**
     * The different map types known to the map plugin. Third parties adding to this list should not use single-character
     * codes, they are reserved for use by VRS.
     */
    VRS.MapType = {
        Hybrid: 'h',
        RoadMap: 'm',
        Satellite: 's',
        Terrain: 't',
        HighContrast: 'o' // <-- note that this is referenced BY VALUE in VRS.globalOptions.mapGoogleMapStyles
    };
    /**
     * The names for the pages on the mobile site. These need to be unique.
     */
    VRS.MobilePageName = {
        Map: 'map',
        AircraftDetail: 'aircraftDetail',
        AircraftList: 'aircraftList',
        Options: 'options'
    };
    /**
     * An enumeration of different actions that can be taken when an aircraft goes off-radar.
     */
    VRS.OffRadarAction = {
        Nothing: '---',
        WaitForReturn: 'wfr',
        EnableAutoSelect: 'eas'
    };
    /**
     * An enumeration of the different properties that can be rendered for an aircraft.
     * If 3rd party code adds to this list then they should not use 3 letter codes. Those are reserved for VRS use.
     */
    VRS.RenderProperty = {
        None: '---',
        AirportDataThumbnails: 'adt',
        Altitude: 'alt',
        //        AltitudeAndSpeedGraph:          'als',
        AltitudeAndVerticalSpeed: 'alv',
        //        AltitudeGraph:                  'alg',
        AltitudeType: 'aty',
        AverageSignalLevel: 'avs',
        Bearing: 'bng',
        Callsign: 'csn',
        CallsignAndShortRoute: 'csr',
        CivOrMil: 'mil',
        CountMessages: 'mct',
        Country: 'cou',
        Distance: 'dis',
        Engines: 'eng',
        FlightLevel: 'flv',
        FlightLevelAndVerticalSpeed: 'fav',
        FlightsCount: 'fct',
        Heading: 'hdg',
        HeadingType: 'hty',
        Icao: 'ico',
        Interesting: 'int',
        Latitude: 'lat',
        Longitude: 'lng',
        Manufacturer: 'man',
        Mlat: 'mlt',
        Model: 'mod',
        ModelIcao: 'typ',
        Operator: 'opr',
        OperatorFlag: 'opf',
        OperatorIcao: 'opi',
        Picture: 'pct',
        PictureOrThumbnails: 'pic',
        PositionOnMap: 'pom',
        Receiver: 'rec',
        Registration: 'reg',
        RegistrationAndIcao: 'rai',
        RouteFull: 'rtf',
        RouteShort: 'rts',
        Serial: 'ser',
        SignalLevel: 'sig',
        Silhouette: 'sil',
        SilhouetteAndOpFlag: 'sop',
        Species: 'spc',
        Speed: 'spd',
        SpeedType: 'sty',
        //        SpeedGraph:                     'spg',
        Squawk: 'sqk',
        TargetAltitude: 'tal',
        TargetHeading: 'thd',
        TimeTracked: 'tim',
        Tisb: 'tsb',
        TransponderType: 'trt',
        TransponderTypeFlag: 'trf',
        UserTag: 'tag',
        VerticalSpeed: 'vsi',
        VerticalSpeedType: 'vty',
        Wtc: 'wtc',
        YearBuilt: 'yrb'
    };
    /**
     * A set of bitflags indicating the different areas that a RenderProperty can be rendered on.
     */
    VRS.RenderSurface = {
        List: 0x00000001,
        DetailHead: 0x00000002,
        DetailBody: 0x00000004,
        Marker: 0x00000008,
        InfoWindow: 0x00000010 // The property is being rendered into the mobile map info window
    };
    /**
     * An enumeration of all of the properties that can be shown for an aircraft in a report. These must be unique both
     * within this enum and within ReportFlightProperty - to make this easier all of these values are 3 characters
     * whereas ReportFlightProperty enums are 4 characters.
     */
    VRS.ReportAircraftProperty = {
        AircraftClass: 'acc',
        CofACategory: 'coc',
        CofAExpiry: 'coe',
        Country: 'cod',
        CurrentRegDate: 'crd',
        DeRegDate: 'der',
        Engines: 'eng',
        FirstRegDate: 'frd',
        GenericName: 'gen',
        Icao: 'ico',
        Interesting: 'int',
        Manufacturer: 'man',
        Military: 'mil',
        Model: 'mdl',
        ModelIcao: 'mdi',
        ModeSCountry: 'msc',
        MTOW: 'mto',
        Notes: 'not',
        Operator: 'opr',
        OperatorFlag: 'opf',
        OperatorIcao: 'ops',
        OwnershipStatus: 'ows',
        Picture: 'pic',
        PopularName: 'pop',
        PreviousId: 'prv',
        Registration: 'reg',
        SerialNumber: 'ser',
        Silhouette: 'sil',
        Species: 'spc',
        Status: 'sta',
        TotalHours: 'thr',
        WakeTurbulenceCategory: 'wtc',
        YearBuilt: 'yrb'
    };
    /**
     * An enumeration of the different criteria in a report.
     */
    VRS.ReportFilterProperty = {
        Callsign: 'cal',
        Country: 'cou',
        Date: 'dat',
        FirstAltitude: 'fal',
        HadEmergency: 'emg',
        Icao: 'ico',
        IsMilitary: 'mil',
        LastAltitude: 'lal',
        ModelIcao: 'typ',
        Operator: 'opr',
        Species: 'spc',
        Registration: 'reg',
        WakeTurbulenceCategory: 'wtc'
    };
    /**
     * An enumeration of the different columns that can be shown for a flight. Each must be unique both within this enum
     * and within VRS.ReportAircraftProperty - to make this easier all of these values are 4 characters
     * whereas ReportAircraftProperty enums are 3 characters.
     */
    VRS.ReportFlightProperty = {
        Altitude: 'alti',
        Callsign: 'call',
        CountAdsb: 'cads',
        CountModeS: 'cmds',
        CountPositions: 'cpos',
        Duration: 'drtn',
        EndTime: 'etim',
        FirstAltitude: 'falt',
        FirstFlightLevel: 'flvl',
        FirstHeading: 'ftrk',
        FirstLatitude: 'flat',
        FirstLongitude: 'flng',
        FirstOnGround: 'fgnd',
        FirstSpeed: 'fspd',
        FirstSquawk: 'fsqk',
        FirstVerticalSpeed: 'fvsi',
        FlightLevel: 'flev',
        HadAlert: 'halt',
        HadEmergency: 'hemg',
        HadSPI: 'hspi',
        LastAltitude: 'lalt',
        LastFlightLevel: 'llvl',
        LastHeading: 'ltrk',
        LastLatitude: 'llat',
        LastLongitude: 'llng',
        LastOnGround: 'lgnd',
        LastSpeed: 'lspd',
        LastSquawk: 'lsqk',
        LastVerticalSpeed: 'lvsi',
        PositionsOnMap: 'posn',
        RouteShort: 'rsht',
        RouteFull: 'rful',
        RowNumber: 'rown',
        Speed: 'sped',
        Squawk: 'sqwk',
        StartTime: 'stim'
    };
    /**
     * An enumeration of the columns that reports can be sorted on.
     */
    VRS.ReportSortColumn = {
        None: '',
        Callsign: 'callsign',
        Country: 'country',
        Date: 'date',
        FirstAltitude: 'firstaltitude',
        Icao: 'icao',
        LastAltitude: 'lastaltitude',
        Model: 'model',
        ModelIcao: 'type',
        Operator: 'operator',
        Registration: 'reg'
    };
    /**
     * A set of bitflags indicating the different areas that a ReportProperty can be rendered on.
     */
    VRS.ReportSurface = {
        List: 0x00000001,
        DetailHead: 0x00000002,
        DetailBody: 0x00000004 // The property is being rendered into the body portion of the detail panel
    };
    /**
     * An enumeration of the different special positions an element can appear at within a sorted list.
     */
    VRS.SortSpecial = {
        Neither: 0,
        First: 1,
        Last: 2
    };
    /**
     * An enumeration of the different species types sent by the server.
     */
    VRS.Species = {
        None: 0,
        LandPlane: 1,
        SeaPlane: 2,
        Amphibian: 3,
        Helicopter: 4,
        Gyrocopter: 5,
        Tiltwing: 6,
        GroundVehicle: 7,
        Tower: 8
    };
    /**
     * An enumeration of the different units that speeds can be displayed in.
     */
    VRS.Speed = {
        Knots: 'kt',
        MilesPerHour: 'ml',
        KilometresPerHour: 'km'
    };
    /**
     * An enumeration of the different types of speed that can be transmitted by the aircraft.
     */
    VRS.SpeedType = {
        Ground: 0,
        GroundReversing: 1,
        IndicatedAirSpeed: 2,
        TrueAirSpeed: 3
    };
    /**
     * An enumeration of the different kinds of trail display settings.
     */
    VRS.TrailDisplay = {
        None: 'a',
        SelectedOnly: 'b',
        AllAircraft: 'c'
    };
    /**
     * An enumeration of the different kinds of trail that can be displayed.
     */
    VRS.TrailType = {
        Short: 'a',
        Full: 'b',
        ShortAltitude: 'c',
        FullAltitude: 'd',
        ShortSpeed: 'e',
        FullSpeed: 'f' // Full trail, colour indicates speed
    };
    /**
     * An enumeration of the different types of transponder carried by aircraft.
     */
    VRS.TransponderType = {
        Unknown: 0,
        ModeS: 1,
        Adsb: 2,
        Adsb0: 3,
        Adsb1: 4,
        Adsb2: 5 // Mode-S transponder with ADS-B, certain that it is version 2
    };
    /**
     * An enumeration of the different kind of wake turbulence categories (roughly equivalent to size / weight) sent by the server.
     */
    VRS.WakeTurbulenceCategory = {
        None: 0,
        Light: 1,
        Medium: 2,
        Heavy: 3
    };
})(VRS || (VRS = {}));
//# sourceMappingURL=enums.js.map