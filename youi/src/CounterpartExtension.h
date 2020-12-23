#pragma once

#include <youireact/NativeModule.h>

class YI_RN_MODULE(CounterpartExtension) {
public:
    CounterpartExtension();
    YI_RN_EXPORT_NAME(CounterpartExtension);
    YI_RN_EXPORT_METHOD(extendCounterpart)(uint64_t tag);
};

