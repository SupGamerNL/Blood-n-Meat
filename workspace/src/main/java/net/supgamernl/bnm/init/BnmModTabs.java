/*
 *    MCreator note: This file will be REGENERATED on each build.
 */
package net.supgamernl.bnm.init;

import net.supgamernl.bnm.BnmMod;

import net.neoforged.neoforge.registries.DeferredRegister;
import net.neoforged.neoforge.registries.DeferredHolder;

import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.CreativeModeTab;
import net.minecraft.network.chat.Component;
import net.minecraft.core.registries.Registries;

public class BnmModTabs {
	public static final DeferredRegister<CreativeModeTab> REGISTRY = DeferredRegister.create(Registries.CREATIVE_MODE_TAB, BnmMod.MODID);
	public static final DeferredHolder<CreativeModeTab, CreativeModeTab> BLOODN_MEAT = REGISTRY.register("bloodn_meat",
			() -> CreativeModeTab.builder().title(Component.translatable("item_group.bnm.bloodn_meat")).icon(() -> new ItemStack(BnmModItems.COAGULATED_BLOOD.get())).displayItems((parameters, tabData) -> {
				tabData.accept(BnmModItems.BLOOD_DROPLET.get());
				tabData.accept(BnmModItems.COAGULATED_BLOOD.get());
				tabData.accept(BnmModItems.BLOOD_SPLATTERED_IRON_INGOT.get());
				tabData.accept(BnmModItems.BLOOD_INGOT.get());
			}).build());
}