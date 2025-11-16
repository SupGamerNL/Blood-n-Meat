/*
 *    MCreator note: This file will be REGENERATED on each build.
 */
package net.supgamernl.bnm.init;

import net.supgamernl.bnm.item.CoagulatedBloodItem;
import net.supgamernl.bnm.item.BloodSplatteredIronIngotItem;
import net.supgamernl.bnm.item.BloodIngotItem;
import net.supgamernl.bnm.item.BloodDropletItem;
import net.supgamernl.bnm.BnmMod;

import net.neoforged.neoforge.registries.DeferredRegister;
import net.neoforged.neoforge.registries.DeferredItem;

import net.minecraft.world.item.Item;

import java.util.function.Function;

public class BnmModItems {
	public static final DeferredRegister.Items REGISTRY = DeferredRegister.createItems(BnmMod.MODID);
	public static final DeferredItem<Item> BLOOD_DROPLET;
	public static final DeferredItem<Item> BLOOD_INGOT;
	public static final DeferredItem<Item> BLOOD_SPLATTERED_IRON_INGOT;
	public static final DeferredItem<Item> COAGULATED_BLOOD;
	static {
		BLOOD_DROPLET = register("blood_droplet", BloodDropletItem::new);
		BLOOD_INGOT = register("blood_ingot", BloodIngotItem::new);
		BLOOD_SPLATTERED_IRON_INGOT = register("blood_splattered_iron_ingot", BloodSplatteredIronIngotItem::new);
		COAGULATED_BLOOD = register("coagulated_blood", CoagulatedBloodItem::new);
	}

	// Start of user code block custom items
	// End of user code block custom items
	private static <I extends Item> DeferredItem<I> register(String name, Function<Item.Properties, ? extends I> supplier) {
		return REGISTRY.registerItem(name, supplier, new Item.Properties());
	}
}